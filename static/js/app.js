const CLIENT_ID = "9ebe8c83d033468b94a0cf6b96b306ee";
const SPOTIFY_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URI = "https://v27-toucan-team1.netlify.app/"; //Change hosting if you can
const SPACE = "%20";
const SCOPES = "user-top-read user-read-email";
const SCOPES_PARAM =  SCOPES.join(SPACE);

//Function for authentication, once user clicks on login button

const handleLogin = () => {

    window.location = `${SPOTIFY_ENDPOINT}`
   


}

// https://accounts.spotify.com/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09