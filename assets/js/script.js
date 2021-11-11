function getPark() {
    var skillLevel = document.getElementById("skill-level");
    var fitnessLevel = document.getElementById("fitness-level");

    var skillDropdownValue = skillLevel.options[skillLevel.selectedIndex].value;
    var fitnessDropdownValue = fitnessLevel.options[fitnessLevel.selectedIndex].value;

    const trailChoice = document.getElementById("trailChoice");
    const trailHeading = document.getElementById("trail-heading");
    const imageBox = document.getElementById("picture");

    let location;


    if (skillDropdownValue === "Begginer" && fitnessDropdownValue === "Average") {
        location = locations["stanmerPark"];
    } else if (skillDropdownValue === "Begginer" && fitnessDropdownValue === "Fit") {
        location = locations["stanmerPark"];
    } else if (skillDropdownValue === "Begginer" && fitnessDropdownValue === "SuperFit") {
        location = locations["fristonForest"];
    } else if (skillDropdownValue === "Intermediate" && fitnessDropdownValue === "Average") {
        location = locations["stanmerPark"];
    } else if (skillDropdownValue === "Intermediate" && fitnessDropdownValue === "Fit") {
        location = locations["fristonForest"];
    } else if (skillDropdownValue === "Intermediate" && fitnessDropdownValue === "SuperFit") {
        location = locations["surreyHills"];
    } else if (skillDropdownValue === "Advanced" && fitnessDropdownValue === "Average") {
        location = locations["stanmerPark"];
    } else if (skillDropdownValue === "Advanced" && fitnessDropdownValue === "Fit") {
        location = locations["fristonForest"];
    } else if (skillDropdownValue === "Advanced" && fitnessDropdownValue === "SuperFit") {
        location = locations["surreyHills"];
    };
    trailChoice.value = location.displayName;
    trailHeading.textContent = location.displayName;
    document.getElementById("picture").setAttribute("src", location["image"]);
    initMap(location);
    displayCards(location);
    displayEmailForm(location);
    imageBox.classList.remove("d-none");
    document.getElementById("trail-map").style.border = "3px solid #ff3b00eb";
    document.getElementById("picture").style.border = "3px solid #ff3b00eb";
};

function displayCards(location) {
    document.getElementById("uphill").innerHTML = location["uphill"];
    document.getElementById("downhill").innerHTML = location["downhill"];
    document.getElementById("tips").innerHTML = location["tips"];

    document.getElementsByClassName("buttons")[0].style.display = "block";
};

function displayEmailForm(location) {
    document.getElementsByClassName("hero-text-emailForm")[0].style.display = "block";
    document.getElementById("location-form").innerHTML = location.displayName;
};

function displayTrailInformation(location) {
    document.get
}













