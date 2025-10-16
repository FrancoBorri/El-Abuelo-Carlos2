function initMap() {
  // Coordenadas de tu local
  const ubicacion = {
    lat: -40.81734,
    lng: -63.010613,
    title: "Fabrica - Venezuela 218",
  };

  // Crear el mapa
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ubicacion,
  });
}
