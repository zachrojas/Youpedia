// Global variables

var resultsList = document.getElementById('resultsList');
//var searchForm = document.getElementById('searchForm');
var searchInput = document.getElementById('searchInput');
var resultsYoutube = document.getElementById('resultsYoutube');
var searchBtn = document.getElementById('search-btn');
var youtubeFix = [];
// Function to fetch the search results from Wikipedia

function displaySearchResults(x) {
    var url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${x}`;
    console.log(url);
    fetch(url)
        .then(function (response) {
            return (response.json());
        })
        .then(function (data) {
            var resultsArray = data.query.search;
            resultsOnPage(resultsArray);
        })
        .catch(function () {
            console.log('There was an error with Wikipedia API');
        });
}

// Function to display the results using the 'insertAdjacentHTML' method

function resultsOnPage(myArray) {
    resultsList.innerHTML = " ";
    resultsList.insertAdjacentHTML('beforeend', `<h2>Search Results for ${searchInput.value} </h2>`);
    myArray.forEach(function (item) {
        var itemTitle = item.title;
        var itemSnippet = item.snippet;
        var itemUrl = encodeURI(`https://en.wikipedia.org/wiki/${item.title}`);
        resultsList.insertAdjacentHTML('beforeend',
        `<div class="resultItem">
            <h3 class="resultTitle">
            <a href="${itemUrl}" target="_blank" rel="noopener">${itemTitle}</a>
            </h3>
            <p class="resultSnippet"><a href="${itemUrl}"  target="_blank" rel="noopener">${itemSnippet}</a></p>
        </div>`
        );
    })
}

//document.getElementById('submit').addEventListener('click', youtubeAPI;

/* function youtubeAPI () {
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='+searchInput+'&key=AIzaSyAIk-sQsD_lMEy_rg7tZXsnMV2QP71_Zds')
    .then(function(res){
        console.log(res);
        return (res.json());
    })
} */

//youtube api currently using

function displaySearchResultsYoutube(x) {
    var url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${x}&key=AIzaSyAIk-sQsD_lMEy_rg7tZXsnMV2QP71_Zds`;
    console.log(url);
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log("this is youtube data")
                    console.log(data)
                    console.log(data.items[0].snippet.title)
                    youtubeFix = data.items
                    console.log(youtubeFix)
                    resultsOnPageyoutube(youtubeFix);
                })
            } else {
                console.log('Error: ' + response.statusText);
            }
        }).catch(function(error) {
            console.log('Unable to connect to youtube api');
        });
    }
// Function to display the results

function resultsOnPageyoutube(myArray) {
    resultsYoutube.innerHTML = " ";
    //resultsYoutube.insertAdjacentHTML('beforeend', `<h2>Search Results for ${searchInput.value} </h2>`);
    myArray.forEach(function (item) {
        console.log(item);
        var itemTitle = item.snippet.title;
        console.log(itemTitle);
        //var itemSnippet = item.snippet;
        var itemUrl = encodeURI(`https://www.youtube.com/results?search_query=${itemTitle}`);
        console.log(itemUrl);
        resultsYoutube.insertAdjacentHTML('beforeend',
            `<div class="resultItem">
         <h3 class="resultTitle">
            <a href="${itemUrl}" target="_blank" rel="noopener">${itemTitle}</a>
         </h3>
         <p class="resultSnippet"><a href="${itemUrl}"  target="_blank" rel="noopener">
         </a></p>
        </div>`
        );
    })
}


// Search event listener utilizing the 'e' for event

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    displaySearchResults(searchInput.value);
    displaySearchResultsYoutube(searchInput.value);
    localStorage.setItem("searched", searchInput.value);
})

/* gapi.client.setApiKey("AIzaSyAIk-sQsD_lMEy_rg7tZXsnMV2QP71_Zds");
return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(function() { console.log("GAPI client loaded for API"); },
          function(err) { console.error("Error loading GAPI client for API", err); });

// Make sure the client is loaded before calling this method.
function execute() {
return gapi.client.youtube.search.list({
  
})
    .then(function(response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
          },
          function(err) { console.error("Execute error", err); });
}
gapi.load("client");
document.getElementById('sign-in-or-out-button').addEventListener('click', loadClient); */
//
//
//
//
//
/* // Search event listener utilizing the 'e' for event
searchForm.addEventListener('submit', (e) => {
e.preventDefault();
displaySearchResults(searchInput.value);
execute();
}) */


    /* fetch(url)
        .then(function (response) {
            console.log("this is the youtube response")
            return (response.json());
        })
        .then(function (data) {
            console.log("this is data from youtube")
            var resultsArray = data.query.search;
            resultsOnPagee(resultsArray);
        })
        .catch(function () {
            console.log('There was an error with YouTube API');
        }); */
    //}
