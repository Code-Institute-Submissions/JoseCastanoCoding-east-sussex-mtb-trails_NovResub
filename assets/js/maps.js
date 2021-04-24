function initMap(location) {
    if (location !== undefined) {

        let map = new google.maps.Map(document.getElementById("trail-map"), {
            center: location["coords"],
            zoom: 6,
        });

        new google.maps.Marker({
            position: location["coords"],
            map: map,
        });
    }
}