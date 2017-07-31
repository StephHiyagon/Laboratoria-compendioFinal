window.addEventListener('load',function() {
  var validarButton = document.getElementById("validar");
  validarButton.addEventListener('click',function() {
    var inputName = document.getElementById("nombre");
    var nombreError = document.getElementById("nombre-error");

    if (inputName.value == "") {
      nombreError.innerHTML = "Ingrese un nombre válido";
    } else {
      nombreError.innerHTML = "";
    }
  });
});

p {
  color: red;
}

p.nombre {
  color: red;
}

.nombre {
  color: red;
}

#registro {
  color: red;
}

<div class="lista">
  <ul>
    <li class="active">Gian</li>
    <li>Juan</li>
  </ul>
</div>

.active {}
li.active {}
ul li.active {}
.lista ul li.active {}
.lista ul > li.active {}
div ul li.active {}
div.lista ul li.active {}
