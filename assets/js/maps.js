function initMap(trail) {
    if (trail !== undefined) {

        let map = new google.maps.Map(document.getElementById("trail-map"), {
            center: trail["coords"],
            zoom: 6,
        });

        new google.maps.Marker({
            position: trail["coords"],
            map: map,
        });
    }
}