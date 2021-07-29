const axios = require('axios').default;
const fs = require('fs');
const markdown = require("markdown-js");
const cron = require('node-cron');
const cheerio = require('cheerio');
const webhook_time = new Date().toISOString().split('.');
const wordpress = require("wordpress");

// const client = wordpress.createClient({
//     url: "http://fifabonus88.com/",
//     username: "webmaster",
//     password: "ACj9XgjR7b"
// });

function getCheck_UFAX24S() {
    try {
        axios({
                method: 'get',
                url: 'https://skysportsapi.herokuapp.com/sky/getlatest/v1.0/' ///sky/getnews/< name_of_sport >/v1.0/
            })
            .then(response => {
                console.log(response.data)
            })
    } catch (error) {
        console.error(err)
    }
}


function linkCheck() {
    let nameSite = 'fifabonus88.com'
    let Snamesite = nameSite.split('.');
    const URL1 = 'https://'+nameSite+'/wp-json/wp/v2/posts?_fields=author,id,excerpt,title,link'
    axios.get(URL1)
    .then(response => response.data)
    .then((data) => {
        for (let index = 0; index < data.length; index++) {
            const element = data[index].link;
            console.log(element);  
            fs.appendFileSync('./blc/'+Snamesite[0]+'.txt', element+"\n")
            return CheckBL(Snamesite);
        }
  })
}

function CheckBL(Snamesite) {
    let comm = `bash ./blc/blc.sh -input ./blc/${Snamesite[0]}.txt -link https://${Snamesite[0]}.${Snamesite[1]} -v -log ./blc/log${Snamesite[0]}.txt -found-log ./blc/found${Snamesite[0]}.txt -missing-log ./blc/missing${Snamesite[0]}.txt`
    console.log(comm)
}
linkCheck()