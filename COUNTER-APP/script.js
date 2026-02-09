let count = 0;

const counter = document.getElemetById("counter");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");

increase.onclick = () =>{
    count ++;
    counter.textContent = count;
}

decrease.onclick = () =>{
    count--;
    counter.textContent = count;
}

reset.onclick = () =>{
    count = 0;
    counter.textContent = count;
}
