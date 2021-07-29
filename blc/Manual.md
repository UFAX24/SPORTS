# What Backlink ???? 
ตามความเข้าใจคือการย้อนกลับของ ลิ้งค์จากลิ้งค์จากเซิร์ฟเวอร์ ต้นทาง และ ปลายทาง 

มีเครื่องมือมากมายที่ไว้ใช้ตรวจสอบ back links
แต่เครื่องมือนี้ ไม่เหมือนกับเครื่องมืออื่นๆ

# สคริปต์นี้จะไม่ค้นหาลิงก์ย้อนกลับไปยัง  เว็บไซต์ของคุณ สคริปต์นี้ใช้ตรวจสอบรายการลิงก์ย้อนกลับ
ที่คุณทราบอยู่แล้ว  

 # คุณต้องตรวจสอบรายการนี้เป็น
 ประจำในอนาคตเพื่อตรวจสอบว่าลิงก์ ย้อนกลับยังคงมีอยู่หรือไม่และจะไม่ถูกลบ  ดังนั้นสคริปต์นี้จะช่วยให้คุณทำเช่นนั้นได้  
 
 รูปแบบ ลิ้งค์ที่บันทึกในไฟล์ website.txt
 เช่น "https://example.com"

 และใช้รูปแบบการค้นหา
 เช่น "*.example.com"
 
 # คู่มือ
ใส่รายชื่อเว็บลงไปใน website.txt: 
หนึ่ง URLต่อบรรทัด

#### DESCRIPTION
**blc.sh** -input *FILE* -link *LINK* [OPTIONS]


#### OPTIONS

**-v**
Activates verbose mode

 bash blc.sh -input website.txt -link https://ufax24.com -v -log log.txt -found-log found.txt -missing-log missing.txt
 
--------------------------------------------
**-mode** *LETTER*  ทำยังอิไม่เสร็จ
--------------------------------------------

**-E**
 bash blc.sh -input website.txt -link https://ufax24.com -mode -e -log log.txt -found-log found.txt -missing-log missing.txt

Interpret *LINK* as an extended regular expression (ERE).

--------------------------------------------
**-F**

Interpret *LINK* as a fixed string (instead of regular expression). This is the default.

**-G**

Interpret *LINK* as a basic regular expression (BRE).

**-P**

Interpret *LINK* as a Perl-compatible regular expression (PCRE).


---

**-log** *LOG*

Saves the log to file *LOG*.

---

**-found-log** *LOG*

Saves URLs where the *LINK* was found to file *LOG*.

---

**-missing-log** *LOG*

Saves URLs where the *LINK* was not found to file *LOG*.

---

**-append**

All log files will be appended, otherwise they will be overwritten.

---

**-user-agent** *AGENT*

Sets [user-agent string](https://en.wikipedia.org/wiki/User_agent) to *AGENT*.

 
 
# กันลืม
```console
root@pnckdevapp:~# bash blc.sh -input website.txt -link https://ufax24.com -log log.txt -found-log found.txt -missing-log missing.txt
```

based OS simply run the following command to install missing packages:

```console
apt-get update
apt-get install wget grep
```

## iOS
First, install brew, run in terminal:

```console
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Install wget:

```console
brew install wget
```

Install grep (we need a newer version of grep, the one that comes with iOS does not work properly):

```console
brew install grep
```

```console
PATH="/usr/local/opt/grep/libexec/gnubin:$PATH"
```

Finally, please, test that you have the required versions installed. Test `wget` (should be version 1.20.3 or later):

```console
pnckdevapp:~ user$ wget -v
GNU Wget 1.20.3 for darwin18.7.0.

-cares +digest -gpgme +https +ipv6 +iri +large-file -metalink +nls 
+ntlm +opie -psl +ssl/openssl
```
