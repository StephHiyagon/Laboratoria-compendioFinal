var config = {
   apiKey: "AIzaSyD12bLCwjCWhsmyTVHC0vXHgUrqcxkCY4U",
   authDomain: "firetalent-2af48.firebaseapp.com",
   databaseURL: "https://firetalent-2af48.firebaseio.com",
   projectId: "firetalent-2af48",
   storageBucket: "firetalent-2af48.appspot.com",
   messagingSenderId: "703312197564"
 };
 firebase.initializeApp(config);

 var loginGoogle =document.getElementById('logGoogle');
 var loginFacebook =document.getElementById('logFace');
 var cerrarSesion= document.getElementById('cerrar');


function ingresaGoogle(e){
  e.preventDefault();
  if (!firebase.auth().currentUser){

    var provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/plus.login');

    firebase.auth().signInWithPopup(provider).then(function (result) {
       /* body... */

       var token = result.credential.accessToken;

       var user = result.user;

       var name =result.user.displayName;

      //  console.log(user); //para poder ver los cambios
       console.log(name);


    }).catch(function (error){
       /* body... */
       var errorCode = error.code;

       var errorMessage=error.mesagge;

       var email = error.email;

       var credential=error.credential;
    });
   }else{
    firebase.auth().signOut();
   }
}

function salirGoogle(){
  firebase.auth().signOut();
  console.log("saliste, debes volver a logearte");
}



loginGoogle.addEventListener("click",ingresaGoogle);
// loginFacebook.addEventListener("click",ingresaFacebook);
cerrarSesion.addEventListener("click",salirGoogle);
