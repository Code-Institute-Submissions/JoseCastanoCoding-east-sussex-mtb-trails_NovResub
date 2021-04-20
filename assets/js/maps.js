function initMap(GeolocationCoordinates) {
    const map = new google.maps.Map(document.getElementById("trail-map"), {
        zoom: 4,
        center: location,
    });

    initMap(location["GeolocationCoordinates"]);

    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}