function translate(){
  var registro= document.getElementById('form-signin-heading');
  var correo =document.getElementById('inputEmail');
  var contrasena=document.getElementById('inputPassword');
  var recuerda=document.getElementsByTagName('span')[0];
  var boton= document.getElementsByClassName('btn')[0];

  registro.innerHTML = "Por favor inicia sesión";
  correo.placeholder= "Correo electrónico";
  contrasena.placeholder="Contraseña";
  recuerda.innerHTML ="Recuérdame";
  boton.innerHTML="Inicia sesión";
}
translate();

function imprimir(){
  document.getElementById('datos').innerHTML= "Datos del formulario";
  document.getElementById('e').innerHTML= "El correo electrónico ingresado es:";
  document.getElementById('c').innerHTML= "La contraseña ingresada es:";
  var correo =document.getElementById('inputEmail').value;
  var contrasena=document.getElementById('inputPassword').value;
  document.getElementById('muestraE').innerHTML= correo;
  document.getElementById('muestraC').innerHTML= contrasena;
}
