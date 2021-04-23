function getPark() {
    var skillLevel = document.getElementById("skill-level");
    var fitnessLevel = document.getElementById("fitness-level");

    var skillDropdownValue = skillLevel.options[skillLevel.selectedIndex].value;
    var fitnessDropdownValue = fitnessLevel.options[fitnessLevel.selectedIndex].value;

    const trailChoice = document.getElementById("trailChoice");
    const trailHeading = document.getElementById("trail-heading");
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
    document.getElementById("picture").setAttribute("src", location["Image"]);
    initMap(location) = document.getElementById("trail-map").setAttribute("trail-map", location["coords"]);
};














