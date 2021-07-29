const axios = require('axios').default;
const fs = require('fs');
const markdown = require("markdown-js");
const cron = require('node-cron');
const cheerio = require('cheerio');
const webhook_time = new Date().toISOString().split('.');
const wordpress = require("wordpress");

const client = wordpress.createClient({
    url: "https://ufarec.net",
    username: "webmaster",
    password: "ORCWdGLXa0"
});

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


function linkCheckfifabonus88() {
    let nameSite = 'https://ufarec.net'
    let Snamesite = nameSite.split('//');
    let Rnamesite = Snamesite[1].split('.');
    const URL1 = nameSite+'/wp-json/wp/v2/posts?_fields=author,id,excerpt,title,link'
    axios.get(URL1)
    .then(response => response.data)
    .then((data) => {
        for (let index = 0; index < data.length; index++) {
            const element = data[index].link;
            console.log(element);  
            fs.appendFileSync('./blc/'+Rnamesite[0]+'.txt', element+"\n")
            return CheckBL(nameSite,Snamesite,Rnamesite);
        }
  })
}

function CheckBL(nameSite,Snamesite,Rnamesite) {
    let comm = `bash ./blc/blc.sh -input ./blc/${Rnamesite[0]}.txt -link ${nameSite} -v -log ./blc/log${Rnamesite[0]}.txt -found-log ./blc/found${Rnamesite[0]}.txt -missing-log ./blc/missing${Rnamesite[0]}.txt`
    console.log(comm)
}

function name(params) {
    client.getPosts()
        .then((response) => {
        console.log("Found " + response);
})
}
name()