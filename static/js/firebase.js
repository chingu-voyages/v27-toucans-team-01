//<!-- The core Firebase JS SDK is always required and must be listed first -->
//<script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>

//<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
//<script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-analytics.js"></script>
//Add above link to account page

///<script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-auth.js"></script>


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCBEDnF0lqLkwAiHcfnh6CST5XsgyrpNPk",
    authDomain: "toucan-app-9a1b6.firebaseapp.com",
    projectId: "toucan-app-9a1b6",
    storageBucket: "toucan-app-9a1b6.appspot.com",
    messagingSenderId: "285619168895",
    appId: "1:285619168895:web:7d973620aadadc6f13c14a",
    measurementId: "G-FLRDXLG2CF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();

  function signup() {
      var email = document.getElementById("email");  //Change when account html page is setup
      var password = document.getElementById("password"); //Change when account html page is setup

      const promise = auth.createUserWithEmailAndPassword(email, password).then(() => {
            window.location = "profile.html" 
      })
      .catch(error => {
          console.error(error);
      })
     

  }
