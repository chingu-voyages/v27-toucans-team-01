const emailField = document.getElementById('mail');
const passwordField = document.getElementById('password');
const displayName = document.getElementById('displayName');
const labels = document.getElementsByTagName('label');
const signUpButton = document.getElementById('signUpButton');





const signUp = e => {
    e.preventDefault();

    //Function wraps all the signup parts including the email verification, the email
// is then triggered once the user clicks on the signup button
    const email = emailField.value;
    const password = passwordField.value;


     //Built in firebase function responsible for signing up a user
     auth.createUserWithEmailAndPassword(email, password)
     .then(() => {
         console.log('Successfully Signed Up !'); // Maybe we should add alert
         //sendVerificationEmail();
         window.location.assign('profile.html');

     })
     .catch(error => {
         console.error(error);
     })
}

//This function is to send verification email to new users

//const sendVerificationEmail = () => {
    //Built in firebase function responsible for sending the verification email
  //  auth.currentUser.sendEmailVerification()
    //.then(() => {
      //  console.log('Verification Email Sent Successfully !');
        //redirecting the user to the profile page once everything is done correctly
       //window.location.assign('profile.html');
   // })
    //.catch(error => {
      //  console.error(error);
    //})
//}

signUpButton.addEventListener('click', signUp);