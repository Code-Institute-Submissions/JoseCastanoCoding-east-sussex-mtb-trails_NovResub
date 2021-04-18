function getPark() {
    var skillLevel = document.getElementById("skill-level");
    var fitnessLevel = document.getElementById("fitness-level");

    var skillDropdownValue = skillLevel.options[skillLevel.selectedIndex].value;
    var fitnessDropdownValue = fitnessLevel.options[fitnessLevel.selectedIndex].value;

    if (skillDropdownValue === "Begginer" && fitnessDropdownValue === "Average") {
        document.getElementById("trailChoice").value = "Stanmer Park";
        setTimeout(function () { getPark(document.getElementById("trail-heading").textContent = "Stanmer Park"); }, 3500);
    } else if (skillDropdownValue === "Begginer" && fitnessDropdownValue === "Fit") {
        document.getElementById("trailChoice").value = "Stanmer Park";
        setTimeout(function () { getPark(document.getElementById("trail-heading").textContent = "Stanmer Park"); }, 3500);
    } else if (skillDropdownValue === "Begginer" && fitnessDropdownValue === "SuperFit") {
        document.getElementById("trailChoice").value = "Friston Forest";
        setTimeout(function () { getPark(document.getElementById("trail-heading").textContent = "Friston Forest"); }, 3500);
    } else if (skillDropdownValue === "Intermediate" && fitnessDropdownValue === "Average") {
        document.getElementById("trailChoice").value = "Stanmer Park";
        setTimeout(function () { getPark(document.getElementById("trail-heading").textContent = "Stanmer Park"); }, 3500);
    } else if (skillDropdownValue === "Intermediate" && fitnessDropdownValue === "Fit") {
        document.getElementById("trailChoice").value = "Friston Forest";
        setTimeout(function () { getPark(document.getElementById("trail-heading").textContent = "Friston Forest"); }, 3500);
    } else if (skillDropdownValue === "Intermediate" && fitnessDropdownValue === "SuperFit") {
        document.getElementById("trailChoice").value = "Surrey Hills";
        setTimeout(function () { getPark(document.getElementById("trail-heading").textContent = "Surrey Hills"); }, 3500);
    } else if (skillDropdownValue === "Advanced" && fitnessDropdownValue === "Average") {
        document.getElementById("trailChoice").value = "Stanmer Park";
        setTimeout(function () { getPark(document.getElementById("trail-heading").textContent = "Stanmer Park"); }, 3500);
    } else if (skillDropdownValue === "Advanced" && fitnessDropdownValue === "Fit") {
        document.getElementById("trailChoice").value = "Friston Forest";
        setTimeout(function () { getPark(document.getElementById("trail-heading").textContent = "Friston Forest"); }, 3500);
    } else if (skillDropdownValue === "Advanced" && fitnessDropdownValue === "SuperFit") {
        document.getElementById("trailChoice").value = "Surrey Hills";
        setTimeout(function () { getPark(document.getElementById("trail-heading").textContent = "Surrey Hills"); }, 3500);
    };
};







