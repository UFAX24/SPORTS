//facebookPAGE:creatorlive1080p:216172169129814
//EAAG9uzwkoV0BAFekQO9BrtMZClygMNbqOcZCOhwQ25R9ByJ7BGN24dwXd6keY09aZCaNOANsoNPYMGt5yAKQF27ZBIUZCCZA89KcsjMGEGdXzZBwcig9hT5xYnFVjroDAONTHxAh1HxmPIFpfkMZAg8zYdkuJd7YO7XNs5pZA1dqZC0T0ymeJ0xd0S
//105415888496903 : คนดวงดี
//EAAIWm7zA9W4BAHTf1FFze6borjaX0qNiEEMHV6sVWXZC0mISEPJvIfBtdHHb4ZAN2d468Is6Q3vaPetGNB0iog2Y0OedMxot1Rzdfq9o76siPFHn97O9wyZA1kQi6Q5NcSneZCoak2jSgpRqfCVCjDQMeq2DCqiI9JykQNwbbgDfGXAOkF5ZB
const FB = require('fb');
const axios = require('axios').default;
const fs = require('fs');
const markdown = require("markdown-js");
const cron = require('node-cron');
const cheerio = require('cheerio');
const webhook_time = new Date().toISOString().split('T');
const translate = require("translate");

FB.setAccessToken('EAAIWm7zA9W4BAHTf1FFze6borjaX0qNiEEMHV6sVWXZC0mISEPJvIfBtdHHb4ZAN2d468Is6Q3vaPetGNB0iog2Y0OedMxot1Rzdfq9o76siPFHn97O9wyZA1kQi6Q5NcSneZCoak2jSgpRqfCVCjDQMeq2DCqiI9JykQNwbbgDfGXAOkF5ZB');

const firebase = require("firebase/app")
require("firebase/firestore")
require("firebase/database")
require("firebase/storage")

const firebaseConfig = {
    apiKey: "AIzaSyCSyjLFdmjeHadEWZp_odOXVeWSEYX--wc",
    authDomain: "pnck-dev-app.firebaseapp.com",
    databaseURL: "https://pnck-dev-app-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pnck-dev-app",
    storageBucket: "pnck-dev-app.appspot.com",
    messagingSenderId: "66416636425",
    appId: "1:66416636425:web:227d018ef03ec5eabe3ed8",
    measurementId: "G-L959PNZS72"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();
const database = firebase.database();

const
    request = require('request'),
    express = require('express'),
    {
        urlencoded,
        json
    } = require('body-parser'),
    app = express();

app.use(urlencoded({
    extended: true
}));
app.use(json());

function savetofirebase(setdata) {
    try {
        firebase.database().ref('UFAX24_POST_DATA/').set({
            setdata
        });
        console.log("🚀 UFAX24_POST_DATA");
    } catch (error) {
        console.log(error)
    }

}

function postFB(title, image, link, content) {
    let tags = "#ufax24 #iiทงบอล #กีฬามันส์ #ฟุตบอล"
    console.log(title, image, link, content)
    FB.api('me/photos', 'post', {
        url: image,
        caption: title + "\n" + content + "\n" + link + "\n" + tags
    }, function (res) {
        if (!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
        }
        console.log('Post Id: ' + res.post_id);
    });
}

//const VK = require('vk-call').VK;
// const fetch = require('node-fetch');

// const TOKEN = '68a7930e436c5e8c77dbe2580a1518d082a715b693d8c0dae667997dcc73c3d913427b070235ac7e1cb5f'
// const VERSION = '5.131'
// const vk = new VK({
//     token: TOKEN,
//     version: VERSION,
//     timeout: 10000
//   });

//   function vkPost(mediaID) {
//       let = tags = `#footballbetting #betting #website #football #soccer #ufax24 #slotsgames #beautiful #betting #games`
//     fetch(`https://api.vk.com/method/wall.post?access_token=${TOKEN}&v=${VERSION}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: new URLSearchParams({

//             owner_id: -206005481,
//             friendsOnly: 0,
//             fromGroup: 0,
//             message: `🥇 UFAX24 เปิดประสบการณ์ดี ๆ 💵\n🎲ในการเล่นเกมเดิมพัน 🌟\n📲 www.ufax24.com\n\n🇷🇺 хороший опыт Чтобы играть в игры со ставками\nнажмите >> www.ufax24.com\n🇬🇧 good experience To play betting games \n\nClick >> www.ufax24.com\n\n${tags}` ,
//             attachments: mediaID
//         })
//     })
//     .then((res) => res.json())
//     .then(console.log) 
// }

// function vkPostWP(videoID,tilte,link,content) {
//     let = tags = `#footballbetting #betting #website #football #soccer #ufax24 #slotsgames #beautiful #betting #games`
//   fetch(`https://api.vk.com/method/wall.post?access_token=${TOKEN}&v=${VERSION}`, {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: new URLSearchParams({

//           owner_id: -206005481,
//           friendsOnly: 0,
//           fromGroup: 0,
//           message: `🥇 UFAX24 เปิดประสบการณ์ดี ๆ 💵\n🎲ในการเล่นเกมเดิมพัน 🌟\n📲 www.ufax24.com\n\n${tilte}\n${content}\n${link}\n🇷🇺 хороший опыт Чтобы играть в игры со ставками\nнажмите >> www.ufax24.com\n🇬🇧 good experience To play betting games \n\nClick >> www.ufax24.com\n\n${tags}` ,
//           attachments: videoID
//       })
//   })
//   .then((res) => res.json())
//   .then(console.log) 
// }

//  function vkGETPostvideo() {
//     vk.call("video.search", {
//         q: "VK SWAG", adult:1,hd:1,count: 100,sort: 0 
//       })
//       .then(video => {
//         let random_id = Math.round(Math.random() * 100);
//         let videoRES = video.items[random_id];
//         let videoID = 'video'+videoRES.owner_id+'_'+videoRES.id;
//         console.log(videoRES,videoID)
//         return vkPost(videoID);
//     })    
//  }

//  function vkWPPostandvideo() {
//     vk.call("video.search", {
//         q: "VK SWAG", adult:1,hd:1,count: 100,sort: 0 
//       })
//       .then(video => {
//         let random_id = Math.round(Math.random() * 100);
//         let videoRES = video.items[random_id];
//         let videoID = 'video'+videoRES.owner_id+'_'+videoRES.id;
//         console.log(videoRES,videoID)
//         let rawdata = fs.readFileSync('Check_UFAX24S.json');
//         let dataTXT = JSON.parse(rawdata);
//         let tilte = dataTXT.tilte;
//         let link = dataTXT.link;
//         let content = dataTXT.content;
//         return vkPostWP(videoID,tilte,link,content);
//     })    
//  }


// function VKgetpostJAV() {
//     vk.call("video.search", { q: "jav",adult:1,hd:1,count: 100,sort: 0  }).then(video => {
//         let random_id = Math.round(Math.random() * 99);
//         let videoRES = video.items[random_id];
//         let videoID = 'video'+videoRES.owner_id+'_'+videoRES.id;
//         console.log(videoRES,videoID)
//         return vkPost(videoID);
//     })
// }

function getCheck_UFAX24S() {
    try {
        axios({
                method: 'get',
                url: 'https://skysportsapi.herokuapp.com/sky/getlatest/v1.0/'///sky/getnews/< name_of_sport >/v1.0/
            })
            .then(response => {
                console.log(response.data)
            })
    } catch (error) {
        console.error(err)
    }
}
//getCheck_UFAX24S()

function dataSport() {
    //const reply_Token = event.replyToken;
    let datablacklist = []
    axios.get('https://www.skysports.com/football/news')
        .then((response) => {
            let $ = cheerio.load(response);
            $('#widgetLite-5').each(function (i, e) {
                let data = $(e).text();
                console.log(data);
                let links = $(e).attr('href');
                console.log(links);
            })
        })
}

function wpMSport() {
const URL1='https://ufax24.com/wp-json/wp/v2/posts'

let pushPost = []
    axios.get(URL1)
        .then(response => response.data)
        .then((data) => {
            const pushPost = [];
            k = data[0]
            pushPost.push(k)
            console.log('my data ', pushPost) //This gives me the post data

            //res.json(pushPost)
        })

console.log(pushPost)
}

async function SscrapeSports() {
const text = await translate("Hello world", "es");
console.log(text); // Hola mundo
}


function BwpMSport() {
    const URL1='https://ufax24.com/wp-json/wp/v2/posts'
    
  
        axios.get(URL1)
            .then(response => response.data[0])
            .then((data) => {
                
               
                
                //console.log('my data ', pushPost) //This gives me the post data
    
                let Ptilte = data.title.rendered;
                let Pcontent = data.content.rendered;
                let Ptags = [ 6, 5, 7 ]
                //console.log(Ptilte,Pcontent,Ptags)
                return wpPostSportF(Ptilte,Pcontent,Ptags);
            })
            
            //let content = pushPost.content.rendered;
    
    
    }

   BwpMSport()

    function wpPostSportF(Ptilte,Pcontent,Ptags){
    var wordpress = require("wordpress");

    var client = wordpress.createClient({
        url: "http://fifabonus88.com/",
        username: "webmaster",
        password: "ACj9XgjR7b"
    });

    client.newPost({
        title: Ptilte,
        content: Pcontent,
        status: "publish",
    }, function( error, data ) {
        console.log( arguments );
    });
    
    client.getPosts(function (error, posts) {
        console.log("Found " + posts.length + " posts!");
    });
    }

function adataSport() {
    //const reply_Token = event.replyToken;
    let datablacklist = []
    axios.get('https://www.skysports.com/football/news')
        .then((response) => {
            let $ = cheerio.load(response);
            $('#widgetLite-5').each(function (i, e) {
                let data = $(e).text();
                console.log(data);
                let links = $(e).attr('href');
                console.log(links);
            })
        })
}


async function scrapeRealtor() {
    const html = await axios.get('https://www.skysports.com/football/news');
    const $ = await cheerio.load(html.data);
    let sportsdata = [];
    $('#widgetLite-5').each((i, elem) => {
        console.log($(elem))
        sportsdata.push({
            //image: $(elem).find('div.article:nth-child(2) > div > figure > div > a').attr('src'),
            title: $(elem).find('div.nth-child(1) > div > h4').text(),//.replace(/\s/gim, ''),
            //excerpt: $(elem).find('h3.figcaption div a').attr('href'),
            //excerpt: $(elem).find('article:nth-child(3) > div > figure > div').text().trim(),
            //link: $(elem).find('article:nth-child(3) > div > figure > div > a').attr('href')
            //link: $(elem).find('div.article:nth-child > div > figure > div > a').attr('href')
        })
    });
    // let rawdata = fs.readFileSync('./Check_UFAX24S.json');
    // let dataTXT = JSON.parse(rawdata);
    // if (sportsdata[0].title === dataTXT[0].title) {
    //     console.log("NO_NEW_DATA");
    //     return
    // } else {
    //     let data = JSON.stringify(sportsdata);
    //     fs.writeFileSync('Check_UFAX24S.json', data);
    //     return;
    // }
}

//#detail-main
async function scrapeSports() {
    let rawdata = fs.readFileSync('./Check_UFAX24S.json');
    let dataTXT = JSON.parse(rawdata);
    let uurl = dataTXT[0].link;
    const html = await axios.get(`${uurl}`);
    const $ = await cheerio.load(html.data);
    let dataSportslist = [];
    $('#detail-main').each((i, elem) => {
        //console.log($(elem))
        dataSportslist.push({
            image: $(elem).find('#detail-main > figure > a').attr('href'),
            title: $(elem).find('#detail-main > h1').text(),
            th2: $(elem).find('#detail-main > h2').text(),

            cont1: $(elem).find('#detail-main > p:nth-child(4)').text().replace(/\s/gim, ''),
            cont2: $(elem).find('#detail-main > p:nth-child(6)').text().replace(/\s/gim, ''),
            cont3: $(elem).find('#detail-main > p:nth-child(8)').text().replace(/\s/gim, ''),
            //excerpt: $(elem).find('article:nth-child(3) > div > figure > div').text().trim(),
            //link: $(elem).find('article:nth-child(3) > div > figure > div > a').attr('href')
            //link: $(elem).find('div.article:nth-child > div > figure > div > a').attr('href')
        })
    });
    console.log(dataSportslist)
    let kkey = 'สืบทอด'
    let bl = '<a href="https://ufax24.com/" target="_blank" rel="dofollow"> ' + kkey+' </a>'
    let reg = dataSportslist[0].cont3.replace(/สืบทอด/gim,bl) ;
    
    let wwdata = 
    '---\n' + 
    'title: '+ dataSportslist[0].title +'\n'+ 
    'date: '+"'"+ webhook_time[0] +"'"+'\n'+ 
    'tags: '+'[markdown'+','+'+code+'+','+'features'+']'+'\n'+ 
    'draft: false' +'\n'+ 
    'summary: '+ dataSportslist[0].th2 +'\n'+ 
    '---'+'\n\n\n'+
   
    '# '+ dataSportslist[0].title +' \n'+ 
    dataSportslist[0].cont1+'\n'+
    
    `<div className="flex flex-wrap -mx-2 overflow-hidden xl:-mx-2">
    <div className="my-1 px-2 w-full overflow-hidden xl:my-1 xl:px-2 xl:w-1/2">
      <Image alt="Maple" src="${dataSportslist[0].image}" width={640} height={427} />
    </div>
    <div className="my-1 px-2 w-full overflow-hidden xl:my-1 xl:px-2 xl:w-1/2">
      <Image alt="Lake" src="${dataSportslist[0].image}" width={640} height={427} />
    </div>
    <div className="my-1 px-2 w-full overflow-hidden xl:my-1 xl:px-2 xl:w-1/2">
      <Image alt="Mountains" src="${dataSportslist[0].image}" width={640} height={427} />
    </div>
    <div className="my-1 px-2 w-full overflow-hidden xl:my-1 xl:px-2 xl:w-1/2">
      <Image alt="Toronto" src="${dataSportslist[0].image}" width={640} height={427} />
    </div>
  </div>` +
    dataSportslist[0].cont2+'\n'+
    reg+'\n\n'
    console.log(wwdata)
    const dirname = "./data/blog/"+webhook_time[0]+"_sport.md";

    
        fs.writeFileSync(dirname, wwdata);
    

    var result = markdown.makeHtml(wwdata);

    console.log(result);
    
}
//scrapeSports()

// const walk = require('walk');
// const matter = require('gray-matter');
// const dirname = "./blog-ufax24/data/blog/"+webhook_time[0]+"_sport.md";
// const path = require('path');
// const walker = walk.walk(dirname);
// let prefix = ""
// const stream = fs.createWriteStream("json.json", {flags:'a'});
// stream.write("[\n");
// walker.on("file",  (root, fileStats, next) => {
//     const str = fs.readFileSync(path.join(root, fileStats.name), 'utf8');
//     stream.write(prefix);
//     stream.write(JSON.stringify(matter(str),null, 4));
//     prefix=","
//     next();
// });

// walker.on("errors", function (root, nodeStatsArray, next) {
//     next();
// });

// walker.on("end", function () {
//     stream.write("\n]");
//     stream.end();
// });

//dataSport()
//scrapeRealtor()
// var VK_postVIDUFAX24 = cron.schedule('*/59 * * * *', () => {
//     vkGETPostvideo();
// }, {
//     scheduled: false
// });
// var VK_postJAVVIDUFAX24 = cron.schedule('*/59 * * * *', () => {
//     VKgetpostJAV();
// }, {
//     scheduled: false
// });

// // var VK_postUFAX24 = cron.schedule('*/30 * * * *', () => {
// //     VKgetpost();
// // }, {
// //     scheduled: false
// // });

// var Check_UFAX24S = cron.schedule('*/1 * * * *', () => {
//     getCheck_UFAX24S();
// }, {
//     scheduled: false
// });
// //VK_postUFAX24.start();
// Check_UFAX24S.start();
// VK_postVIDUFAX24.start();
// VK_postJAVVIDUFAX24.start();


// var listener = app.listen(process.env.PORT || 8080, function () {
//     console.log('🚀 𝙎𝙚𝙧𝙫𝙚𝙧 𝙒𝙚𝙗𝙝𝙤𝙤𝙠 𝙎𝙩𝙖𝙧𝙩 ~~~~ ' + listener.address().port);
//   });