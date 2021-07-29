const axios = require('axios').default;
const fs = require('fs');
const markdown = require("markdown-js");
const cron = require('node-cron');
const cheerio = require('cheerio');
const webhook_time = new Date().toISOString().split('.');
const wordpress = require("wordpress");

const client = wordpress.createClient({
    url: "http://fifabonus88.com/",
    username: "webmaster",
    password: "ACj9XgjR7b"
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
//getCheck_UFAX24S()
function wpMSport() {
    const URL1 = 'https://ufax24.com/wp-json/wp/v2/posts'
    axios.get(URL1)
        .then(response => response.data[2])
        .then((data) => {
            console.log(data);     
        client.newPost({
            date_gmt: webhook_time[0],
            title: data.title.rendered,
            content: data.content.rendered,
            status: "draft",
        }, function (error, data) {
         console.log( data );
         const dirname = "./data/blog/"+webhook_time[0]+"_sport.md";
         fs.writeFileSync(dirname, data.content.rendered);
         let result = markdown.makeHtml(data.content.rendered);
        console.log(result);
        })
    });
      client.getPosts(function (error, posts) {
        console.log("Found " + posts + " posts!");
    });
}

function linkCheck() {
    const URL1 = 'https://ufax24.com/wp-json/wp/v2/posts?_fields=author,id,excerpt,title,link'
    axios.get(URL1)
    .then(response => response.data)
    .then((data) => {
        for (let index = 0; index < data.length; index++) {
            const element = data[index].link;
            console.log(element);  
        }
  })
}
linkCheck()


