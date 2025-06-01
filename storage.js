let activity = ['Cycling', 'Running', 'Weights', 'Yoga'];

let cycling = document.getElementById("cycle");
let running = document.getElementById("run");
let weights = document.getElementById("weight");
let yoga = document.getElementById("yoga");

cycling.addEventListener("click", logCycling);
running.addEventListener("click", logRunning);
weights.addEventListener("click", logWeights);
yoga.addEventListener("click", logYoga);

function removeBorders() {
    cycling.style.border = "none";
    running.style.border = "none";
    weights.style.border = "none";
    yoga.style.border = "none";
}

function logCycling() {
    removeBorders();
    cycling.style.border = "2px solid black";  
    localStorage.setItem('activity', activity[0]); 
}

function logRunning() {
    removeBorders();
    running.style.border = "2px solid black"; 
    localStorage.setItem('activity', activity[1]);  
}

function logWeights() {
    removeBorders();
    weights.style.border = "2px solid black"; 
    localStorage.setItem('activity', activity[2]);  
}

function logYoga() {
    removeBorders();
    yoga.style.border = "2px solid black"; 
    localStorage.setItem('activity', activity[3]);  
}
const saveButton = document.querySelector(".button");

saveButton.addEventListener("click", function () {
    const selectedActivity = localStorage.getItem("activity");

    if (selectedActivity) {
        
        window.location.href = "index.html";
    } else {
        alert("Please select an activity before saving!");
    }
});


