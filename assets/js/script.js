var trails = ["Stanmer Park", "Friston Forest", "Surrey Hills"];

function trailChoice() {
    if (this.document.getElementById("skill-level").selectedValue[0] && this.document.getElementById("fitness-level").selectedValue[0]) {
        document.getElementById("trailChoice").textContent(trails[0]);
    } else {
        console.log(trails);
    }
}