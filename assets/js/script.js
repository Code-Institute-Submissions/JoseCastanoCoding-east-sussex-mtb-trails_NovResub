function getPark() {
    var skillLevel = document.getElementById("skill-level");
    var fitnessLevel = document.getElementById("fitness-level");

    var skillDropdownValue = skillLevel.options[skillLevel.selectedIndex].value;
    var fitnessDropdownValue = fitnessLevel.options[fitnessLevel.selectedIndex].value;

    if (skillDropdownValue === "Begginer" && fitnessDropdownValue === "Average") {
        document.getElementById("trailChoice").value = "Stanmer Park";
    } else if (skillDropdownValue === "Begginer" && fitnessDropdownValue === "Fit") {
        document.getElementById("trailChoice").value = "Stanmer Park";
    } else if (skillDropdownValue === "Begginer" && fitnessDropdownValue === "SuperFit") {
        document.getElementById("trailChoice").value = "Friston Forest";
    } else if (skillDropdownValue === "Intermediate" && fitnessDropdownValue === "Average") {
        document.getElementById("trailChoice").value = "Stanmer Park";
    } else if (skillDropdownValue === "Intermediate" && fitnessDropdownValue === "Fit") {
        document.getElementById("trailChoice").value = "Friston Forest";
    } else if (skillDropdownValue === "Intermediate" && fitnessDropdownValue === "SuperFit") {
        document.getElementById("trailChoice").value = "Surrey Hills";
    } else if (skillDropdownValue === "Advanced" && fitnessDropdownValue === "Average") {
        document.getElementById("trailChoice").value = "Stanmer Park";
    } else if (skillDropdownValue === "Advanced" && fitnessDropdownValue === "Fit") {
        document.getElementById("trailChoice").value = "Friston Forest";
    } else if (skillDropdownValue === "Advanced" && fitnessDropdownValue === "SuperFit") {
        document.getElementById("trailChoice").value = "Surrey Hills";
    };
};