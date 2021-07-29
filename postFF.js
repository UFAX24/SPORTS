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