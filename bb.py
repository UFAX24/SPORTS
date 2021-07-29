# -*- coding: utf-8-*-
import json
import requests
import re
from bs4 import BeautifulSoup
import cloudscraper
import urllib.request

scraper = cloudscraper.create_scraper()  # returns a CloudScraper instance
# Or: scraper = cloudscraper.CloudScraper()  # CloudScraper inherits from requests.Session
#print(scraper.get("https://www.siamsport.co.th/football/international").text)  # => "<!DOCTYPE html><html><head>..."

def remove(string):
    pattern = re.compile(r'\s+')
    # pattern = re.compile(r'รอบที่ บน-ล่าง รายละเอียด')
    return re.sub(pattern, ',', string)

def sport():
    url = scraper.get("https://skysportsapi.herokuapp.com/sky/football/v1.0/").text
    content = requests.get(url)
    print(content)
    content.encoding = "utf-8"
    soup = BeautifulSoup(content, 'html.parser')
    tags = soup.find_all('div', {"class": "news-list block"})
    page = urllib.request.urlopen(url)
    try:
        page = urllib.request.urlopen(url)
        print(page.prettify())
    except:
        print("An error occured.")

root_url = 'http://www1.skysports.com/'

sports=["football","cricket","golf","rugby-league","boxing","tennis","f1","darts","snooker","cycling","american-football","motor-racing","ice-hockey","baseball"]

def get_latest():
    index_url = root_url + "latest-news"+"/"
    response = requests.get(index_url)
    latest={}

    soup = BeautifulSoup(response.text)
    for sport in sports:
        info=[]
        for a in soup.select('div.site-wrapper a[href^=https://www.skysports.com/'+sport+'/]'):
            info.append({"link":a.attrs.get('href'),"text":a.get_text()})
        latest[sport]=info
    return json.dumps(latest)      
    
     
    #print(soup.title.string)
    #for tag in tags:
        #textdata = remove(tag.get_text()).split(',')
        
        # roundNowLotto = "ผลหวยยี่กี จาก ʟᴏᴛᴛᴏᴠɪᴘ\n"+textdata[28]+"ที่ "+textdata[29]+"\n❸ ตัวบน "+textdata[31] + \
        #     "\n❷ ตัวล่าง " + textdata[32]+"\n----- ย้อนหลัง -----" + \
        #     "\n"+textdata[37]+" "+textdata[38] + " 🔸 3บน : " + textdata[40] + " | 2ล่าง : " + textdata[41] +\
        #     "\n"+textdata[46]+" "+textdata[47] + " 🔸 3บน : " + textdata[49] + " | 2ล่าง : " + textdata[50] +\
        #     "\n"+textdata[55]+" "+textdata[56] + " 🔸 3บน : " + textdata[58] + " | 2ล่าง : " + textdata[59] +\
        #     "\n"+textdata[64]+" "+textdata[65] + " 🔸 3บน : " + textdata[67] + " | 2ล่าง : " + textdata[68] +\
        #     "\n"+textdata[73]+" "+textdata[74] + " 🔸 3บน : " + textdata[76] + " | 2ล่าง : " + textdata[77] +\
        #     "\n-----------------------\n   🎲 พื้นที่ว่าง ให้เช่าโฆษณา\n-----------------------"    
        # dataget = getDataLotto(label)
    #print(tag)
    # try:
    #   if re.match(regexT, textdata[31]):
    #     if roundNowLotto != dataget and textdata[29] >= "5":
    #         saveDataLotto(label,roundNowLotto)
    #         print("OK_"+label.upper())
    #         return label
    #     else:
    #       #print("DUB_"+label.upper())
    #       print("Duplicate_"+label.upper())
    #   else:
    #       #print("RUN_wait "+label.upper())
    #       print("RUN_wait "+label.upper())
    # except Exception as error:
    #     print(error)
    #     print("RUN_"+label.upper())

sport()