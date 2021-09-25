// Global variables

var resultsList = document.getElementById('resultsList');
var searchForm = document.getElementById('searchForm');
var searchInput = document.getElementById('searchInput');

// Function to fetch the search results from Wikipedia

function displaySearchResults(x) {
    var url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${x}`;
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
            console.log('There was an error');
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

function youtubeAPI () {
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='+searchInput+'&key=AIzaSyAIk-sQsD_lMEy_rg7tZXsnMV2QP71_Zds')
    .then(function(res){
        console.log(res);
        return (res.json());
    })
}

// Search event listener utilizing the 'e' for event

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    displaySearchResults(searchInput.value);
    youtubeAPI();
})


gapi.client.setApiKey("AIzaSyAIk-sQsD_lMEy_rg7tZXsnMV2QP71_Zds");
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
document.getElementById('sign-in-or-out-button').addEventListener('click', loadClient);
//
//
//
//
//
// Search event listener utilizing the 'e' for event
searchForm.addEventListener('submit', (e) => {
e.preventDefault();
displaySearchResults(searchInput.value);
execute();
})
