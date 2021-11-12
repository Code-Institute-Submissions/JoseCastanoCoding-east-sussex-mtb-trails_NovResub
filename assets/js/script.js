function getPark() {
    var skillLevel = document.getElementById("skill-level");
    var fitnessLevel = document.getElementById("fitness-level");

    var skillDropdownValue = skillLevel.options[skillLevel.selectedIndex].value;
    var fitnessDropdownValue = fitnessLevel.options[fitnessLevel.selectedIndex].value;

    const trailChoice = document.getElementById("trailChoice");
    const trailHeading = document.getElementById("trail-heading");
    const imageBox = document.getElementById("picture");

    let trail;


    if (skillDropdownValue === "Beginner" && fitnessDropdownValue === "Average") {
        trail = trails["stanmerPark"];
    } else if (skillDropdownValue === "Beginner" && fitnessDropdownValue === "Fit") {
        trail = trails["stanmerPark"];
    } else if (skillDropdownValue === "Beginner" && fitnessDropdownValue === "SuperFit") {
        trail = trails["fristonForest"];
    } else if (skillDropdownValue === "Intermediate" && fitnessDropdownValue === "Average") {
        trail = trails["stanmerPark"];
    } else if (skillDropdownValue === "Intermediate" && fitnessDropdownValue === "Fit") {
        trail = trails["fristonForest"];
    } else if (skillDropdownValue === "Intermediate" && fitnessDropdownValue === "SuperFit") {
        trail = trails["surreyHills"];
    } else if (skillDropdownValue === "Advanced" && fitnessDropdownValue === "Average") {
        trail = trails["stanmerPark"];
    } else if (skillDropdownValue === "Advanced" && fitnessDropdownValue === "Fit") {
        trail = trails["fristonForest"];
    } else if (skillDropdownValue === "Advanced" && fitnessDropdownValue === "SuperFit") {
        trail = trails["surreyHills"];
    };
    trailChoice.value = trail.displayName;
    trailHeading.textContent = trail.displayName;
    document.getElementById("picture").setAttribute("src", trail["image"]);
    initMap(trail);
    displayEmailForm(trail);
    imageBox.classList.remove("d-none");
    document.getElementById("trail-map").style.border = "3px solid #ff3b00eb";
    document.getElementById("picture").style.border = "3px solid #ff3b00eb";
    document.getElementsByClassName("buttons")[0].style.display = "block";
};

function displayCards(trail) {
    document.getElementById("uphill").innerHTML = trail["uphill"];
    document.getElementById("downhill").innerHTML = trail["downhill"];
    document.getElementById("tips").innerHTML = trail["tips"];
};

function displayEmailForm(trail) {
    document.getElementsByClassName("hero-text-emailForm")[0].style.display = "block";
    document.getElementById("location-form").innerHTML = trail.displayName;
};















