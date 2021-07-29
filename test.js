//facebookPAGE:creatorlive1080p:216172169129814
//EAAG9uzwkoV0BAFekQO9BrtMZClygMNbqOcZCOhwQ25R9ByJ7BGN24dwXd6keY09aZCaNOANsoNPYMGt5yAKQF27ZBIUZCCZA89KcsjMGEGdXzZBwcig9hT5xYnFVjroDAONTHxAh1HxmPIFpfkMZAg8zYdkuJd7YO7XNs5pZA1dqZC0T0ymeJ0xd0S
//105415888496903 : คนดวงดี
//EAAIWm7zA9W4BAHTf1FFze6borjaX0qNiEEMHV6sVWXZC0mISEPJvIfBtdHHb4ZAN2d468Is6Q3vaPetGNB0iog2Y0OedMxot1Rzdfq9o76siPFHn97O9wyZA1kQi6Q5NcSneZCoak2jSgpRqfCVCjDQMeq2DCqiI9JykQNwbbgDfGXAOkF5ZB
const FB = require('fb');
const axios = require('axios').default;
const fs = require('fs');
const cron = require('node-cron');

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

function getCheck_UFAX24S() {
    try {
        axios({
                method: 'get',
                url: 'https://ufax24.com/wp-json/wp/v2/posts'
            })
            .then(response => {
                let title = response.data[0].title.rendered;
                let modified_gmt = response.data[0].modified_gmt;
                let link = response.data[0].link;
                let imageTag = response.data[0].content.rendered.match(/src="[^>]*.jpg"/gm);
                let image = imageTag[0].replace(/src="/gm, "").replace(/"/gm, "");
                let section = response.data[0].content.rendered.replace(/<[^>]*>/gim, "").replace(/\s/gm, ",").replace(/,/gm, ",").replace(/,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,/g, '').replace(/,,,,,,/g, '').replace(/,/gm, '\n').split('#image');
                let content = section[0];
                // let rawdata = fs.readFileSync('Check_UFAX24S.json');
                // let dataTXT = JSON.parse(rawdata);
                let setdata = {
                    'title': title,
                    'modified_gmt': modified_gmt,
                    'link': decodeURI(link),
                    'image': image,
                    'content': content
                }
                console.log(imageTag)
                // if (title === dataTXT.title) {
                //     console.log(title, dataTXT.title)
                //     console.log("NO_NEW_DATA");
                //     return
                // } else {
                    let data = JSON.stringify(setdata);
                    fs.writeFileSync('latestPost.json', data);
                    
                    console.log("🚀 NEW_DATA");
                    
                   
                })

            //})
    } catch (error) {
        console.error(err)
    }
}



getCheck_UFAX24S()
// var Check_UFAX24S = cron.schedule('*/1 * * * *', () => {
//     getCheck_UFAX24S();
// }, {
//     scheduled: false
// });
// //VK_postUFAX24.start();
// Check_UFAX24S.start();

var listener = app.listen(process.env.PORT || 8080, function () {
    console.log('🚀 𝙎𝙚𝙧𝙫𝙚𝙧 𝙒𝙚𝙗𝙝𝙤𝙤𝙠 𝙎𝙩𝙖𝙧𝙩 ~~~~ ' + listener.address().port);
  });