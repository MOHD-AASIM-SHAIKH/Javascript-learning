const hours = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function updateClock(){
    const now =  new Date();
    hours.textContent = String(now.getHours());
    min.textContent = String(now.getMinutes());
    sec.textContent = String(now.getSeconds());
}
setInterval(updateClock,1000);