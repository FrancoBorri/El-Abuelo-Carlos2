function initMap() {
    // Coordenadas de tu local
    const ubicacion = { lat: -40.817340, lng: -63.010613 };

    // Crear el mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: ubicacion,
    });

    const locations = [
        { lat: -40.817340, lng: -63.010613 },
        { lat: -40.818000, lng: -63.011000 },
        { lat: -40.816500, lng: -63.009500 }
    ];





    // Agregar marcador
    const marker = new google.maps.Marker({
        position: ubicacion,
        map: map,
        title: "Venezuela 218"
    });
}
