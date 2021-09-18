document.getElementById('submit').addEventListener('click', youtubeAPI);



function youtubeAPI () {
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAIk-sQsD_lMEy_rg7tZXsnMV2QP71_Zds')
    .then(function(res){
        console.log(res);
        return res.text();
    })
}