


// import our modules
const http         = require('http')
const Router       = require('router')
const finalhandler = require('finalhandler')
const compression  = require('compression')
const bodyParser   = require('body-parser')
const axios = require('axios').default;
const fs = require('fs');
const markdown = require("markdown-js");
const cron = require('node-cron');
const cheerio = require('cheerio');
const webhook_time = new Date().toISOString().split('.');
const wordpress = require("wordpress");
const URL1='https://ufax24.com/wp-json/wp/v2/posts'

const message = "Hello World!"
 
// initialize the router & server and add a final callback.
const router = Router()
const server = http.createServer(function onRequest(req, res) {
  router(req, res, finalhandler(req, res))
})
 
// use some middleware and compress all outgoing responses
router.use(compression())

router.get("/posts", (req, res, next) => {
    axios.get(URL1)
        .then(response => response.data)
        .then((data) => {
            const pushPost = [];
            k = data[0]
            pushPost.push(k)
            console.log('my data ', pushPost) //This gives me the post data

            res.json(pushPost)
        })

})
// create and mount a new router for our API
const api = Router()
router.use('/api/', api)
 
// add a body parsing middleware to our API
api.use(bodyParser.json())
 

// handle `PATCH` requests to `/api/set-message`
api.patch('/set-message', function (req, res) {
  if (req.body.value) {
    message = req.body.value
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(message + '\n')
  } else {
    res.statusCode = 400
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Invalid API Syntax\n')
  }
})
server.listen(8080)
console.log('🚀 𝙎𝙚𝙧𝙫𝙚𝙧 𝙒𝙚𝙗𝙝𝙤𝙤𝙠 𝙎𝙩𝙖𝙧𝙩 ~~~~ ');
