
let map;

function initMap(location) {
    map = new google.maps.Map(document.getElementById("trail-map"), {
        center: location["coords"],
        zoom: 4,
    });

    const marker = new google.maps.Marker({
        position: location["coords"],
        map: map,
    });
}


