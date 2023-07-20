const timeDisplay = document.querySelector("#timedisplay");
const startbttn = document.querySelector("#strbtn");
const pausebtn = document.querySelector("#psdbtn");
const resetbtn = document.querySelector("#rstbtn");

let starttime = 0;
let elapsedtime = 0;
let currenttime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startbttn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        starttime = Date.now() - elapsedtime;
        intervalId = setInterval(updatetime, 1000);
        }
});
pausebtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedtime = Date.now() - starttime;
        clearInterval(intervalId);
    }
});
resetbtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    let starttime = 0;
    let elapsedtime = 0;
    let currenttime = 0;
    let hrs = 0;
    let mins = 0;
    let secs = 0;
    timeDisplay.textContent = "00:00:00";

});

function updatetime(){
    elapsedtime = Date.now() - starttime;

    secs = Math.floor((elapsedtime/ 1000)%60);
    mins   = Math.floor((elapsedtime/ (1000*60))%60);
    hrs = Math.floor((elapsedtime/ (1000*60*60))%60);
    
    secs = pad(secs);
    mins = pad(mins);
    hrs  = pad(hrs);
    
    timeDisplay.textContent = `${hrs} : ${mins} : ${secs}`;

    function pad(unit){
        return(("0") + unit).length > 2 ? unit : "0" + unit;
    }
}

