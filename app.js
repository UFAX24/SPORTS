var express = require("express");
var request = require("request");
var router = express;
const URL1='https://ufax24.com/wp-json/wp/v2/posts'

// var getWPPost = function(req, res){
//     var headers, options;

//     // Set the headers
//     headers = {
//         'Content-Type':'application/x-www-form-urlencoded'
//     }

//     // Configure the request
//     options = {
//         url: 'https://ufax24.com/wp-json/wp/v2/posts',
//         method: 'GET',
//         headers: headers
//     }

//     // Start the request
//     request(options, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             res.send({
//                success: true,
//                message: "Successfully fetched a list of post", 
//                posts: JSON.parse(body)
//             });
//         } else {
//              console.log(error);
//         }
//      });
//    };

//   router.get('/post', function(req, res){
//        getWPPost(req, res);
//   })

  

  app.get("/posts", (req, res, next) => {
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