function createPost(texto) {
  var post = document.createElement('div');
  var texto = document.createElement('p');
  texto.innerHTML = texto;
  var eliminar = document.createElement('a');
  eliminar.innerHTML = "Eliminar"
  eliminar.addEventListener('click',function(e) {
    e.preventDefault();
    var postParent = e.target.parent; // Devuelve el padre
  });
  post.appendChild(texto);
  post.appendChild(eliminar);
  return post;
}


var resultado = document.getElementById('resultado');
resultado.appendChild(createPost("Gian"));
