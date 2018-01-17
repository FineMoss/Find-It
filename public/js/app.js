(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCga7yhOj871cubF7RnSM1yLHw52KgvMUA",
    authDomain: "find-it-50a6f.firebaseapp.com",
    databaseURL: "https://find-it-50a6f.firebaseio.com",
    projectId: "find-it-50a6f",
    storageBucket: "find-it-50a6f.appspot.com",
    messagingSenderId: "980265757806"
  };
  firebase.initializeApp(config);

  // get html elements
  const textEmail = document.getElementById('email');
  const textPassword = document.getElementById('password');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // add login event
  btnLogin.addEventListener('click', e => {
    const email = textEmail.value;
    const pass = textPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message))
  });

  // add sign up event
  btnSignUp.addEventListener('click', e => {
    const email = textEmail.value;
    const pass = textPassword.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message))
  });

  // add logout event
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  // add realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
      btnLogout.classList.remove('hide');
    }
    else {
      btnLogout.classList.add('hide')
    }
  });


}());




      