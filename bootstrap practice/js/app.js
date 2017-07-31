  function initMap() {
  var laboratoriaLima = {lat: -12.1191427, lng: -77.0349046};
  var marcadorLaboratoria;
  var map = new google.maps.Map(document.getElementById("map"),{
    zoom: 18,
		center: laboratoriaLima
  });

  marcadorLaboratoria = new google.maps.Marker({
    position: laboratoriaLima,
    map: map
  });

  var latitud,longitud,miUbicacion;
  var exito = function(posicion) {
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;

  miUbicacion = new google.maps.Marker({
      position: {lat:latitud, lng:longitud},
      animation: google.maps.Animation.DROP,
      map: map
    });
    map.setZoom(18);
    map.setCenter({lat:latitud, lng:longitud});
  }

  var error = function (error) {
    alert("Tenemos un problema con encontrar tu ubicación");
  }

  function buscar() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(exito,error);
    }
  }
  var inputPartida=document.getElementById("partida");
  var inputDestino=document.getElementById("destino");

  new google.maps.places.Autocomplete(inputPartida);
  new google.maps.places.Autocomplete(inputDestino);

  var directionsService= new google.maps.DirectionsService;
  var directionsDisplay=new google.maps.DirectionsRenderer;

  var calculateAndDisplayRoute = function(directionsService,directionsDisplay){
    directionsService.route({
      origin:inputPartida.value,
      destination:inputDestino.value,
      travelMode:'DRIVING'
    },function (response,status){
      if(status==='OK'){

        console.log(response.routes[0].legs[0].distance.text.replace("km",""));
        var distancia= Number(response.routes[0].legs[0].distance.text.replace("km","").replace(",","."));
        console.log(distancia);
        var tarifa=document.getElementsByClassName('tarifa')[0];
        tarifa.classList.remove("none");

        var costo=distancia*1.75;

        if(costo<4){
        tarifa.innerHTML="S/.4";
        }
        else{
        tarifa.innerHTML="S/."+parseInt(costo);
        }
        directionsDisplay.setDirections(response);
        miUbicacion.setMap(null);
        marcadorLaboratoria.setMap(null);

      }else{
        window.alert("No encontramos la ruta");
      }
    });
  }

  directionsDisplay.setMap(map);


  var trazarRuta=function(){
    calculateAndDisplayRoute(directionsService,directionsDisplay);
  }

  document.getElementById('trazar').addEventListener('click',trazarRuta);

  document.getElementById("encuentrame").addEventListener("click",buscar);


}
