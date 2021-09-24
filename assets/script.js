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
         <p class="resultSnippet"><a href="${itemUrl}"  target="_blank" rel="noopener">
         ${itemSnippet}</a></p>
        </div>`
        );
    })
}

//document.getElementById('submit').addEventListener('click', youtubeAPI;



//
//
//
//
//




var GoogleAuth;
var SCOPE = 'https://www.googleapis.com/auth/youtube.force-ssl';
function handleClientLoad() {
  // Load the API's client and auth2 modules.
  // Call the initClient function after the modules load.
  gapi.load('client:auth2', initClient);
}

function initClient() {
  // In practice, your app can retrieve one or more discovery documents.
  var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest';

  // Initialize the gapi.client object, which app uses to make API requests.
  // Get API key and client ID from API Console.
  // 'scope' field specifies space-delimited list of access scopes.
  gapi.client.init({
      'apiKey': 'AIzaSyAIk-sQsD_lMEy_rg7tZXsnMV2QP71_ZdsY',
      'clientId': '10402979075-e52kp9jps4r5gmh9e93sbebvhpj3plu4.apps.googleusercontent.com',
      'discoveryDocs': [discoveryUrl],
      'scope': SCOPE
  }).then(function () {
    GoogleAuth = gapi.auth2.getAuthInstance();

    // Listen for sign-in state changes.
    GoogleAuth.isSignedIn.listen(updateSigninStatus);

    // Handle initial sign-in state. (Determine if user is already signed in.)
    var user = GoogleAuth.currentUser.get();
    setSigninStatus();

    // Call handleAuthClick function when user clicks on
    //      "Sign In/Authorize" button.
    $('#sign-in-or-out-button').click(function() {
      handleAuthClick();
    });
    $('#revoke-access-button').click(function() {
      revokeAccess();
    });
  });
}

function handleAuthClick() {
  if (GoogleAuth.isSignedIn.get()) {
    // User is authorized and has clicked "Sign out" button.
    GoogleAuth.signOut();
  } else {
    // User is not signed in. Start Google auth flow.
    GoogleAuth.signIn();
  }
}

function revokeAccess() {
  GoogleAuth.disconnect();
}

function setSigninStatus() {
  var user = GoogleAuth.currentUser.get();
  var isAuthorized = user.hasGrantedScopes(SCOPE);
  if (isAuthorized) {
    $('#sign-in-or-out-button').html('Sign out');
    $('#revoke-access-button').css('display', 'inline-block');
    $('#auth-status').html('You are currently signed in and have granted ' +
        'access to this app.');
  } else {
    $('#sign-in-or-out-button').html('Sign In/Authorize');
    $('#revoke-access-button').css('display', 'none');
    $('#auth-status').html('You have not authorized this app or you are ' +
        'signed out.');
  }
}

function updateSigninStatus() {
  setSigninStatus();
  console.log(setSigninStatus);
}





//
//
//
//
//



// Search event listener utilizing the 'e' for event

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    displaySearchResults(searchInput.value);
})
