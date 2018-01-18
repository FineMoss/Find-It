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

  const btnLogout = document.getElementById('btnLogout');

  // add logout event
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  // add realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){

    }
    else {
      window.location.replace("index.html");
    }
  });


}());