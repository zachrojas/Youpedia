document.getElementById('submit').addEventListener('click', youtubeAPI);
var userInput = document.querySelector("#userSearch")



function youtubeAPI () {
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='+userInput+'&key=AIzaSyAIk-sQsD_lMEy_rg7tZXsnMV2QP71_Zds')
    .then(function(res){
        console.log(res);
        return res.text();
    })
}