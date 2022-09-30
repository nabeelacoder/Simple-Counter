let count = 0;

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const counter = document.getElementById("counter");

// increase
increaseBtn.addEventListener("click", updateIncrease);
function updateIncrease(){
    count += 1;
    counter.innerHTML = count;
}

// increase
resetBtn.addEventListener("click", updateReset);
function updateReset(){
    count = 0;
    counter.innerHTML = count;
}

// decrease
decreaseBtn.addEventListener("click", updateDecrease);
function updateDecrease(){
    count -= 1;
    counter.innerHTML = count;
}