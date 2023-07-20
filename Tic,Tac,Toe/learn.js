const cells = document.querySelectorAll(".cell");
const statustext = document.querySelector("#statustext");
const resetbtn = document.querySelector("#restartbtn");
const winconditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 8],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentplayer = "X";
let running = false;

initializegame();

function initializegame(){
    cells.forEach(cells => cells.addEventListener("click", cellclicked))
    resetbtn.addEventListener("click", restartbtn);
    statustext.textContent=`${currentplayer}'s turn`;
    running=true;
}
function cellclicked(){
    const cellindex = this.getAttribute("classindex");
    
    if(options[cellindex] != "" || !running){
        return;
    }
    updatecell(this, cellindex);
    checkwinner();
}
function updatecell(cells, index) {
    options[index]=currentplayer;
    cells.textContent=currentplayer;   
}
function changeplayer() {
    currentplayer = (currentplayer == "X") ? "O" : "X";
    statustext.textContent = `${currentplayer}'s turn`;
    
}
function checkwinner(){
    let roundwon = false;

    for(let i=0; i< winconditions.length; i++){
        const condition = winconditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundwon = true;
            break;
        }
    }   
        if (roundwon){
            statustext.textContent = `${currentplayer} Wins!`;
            running = false;
        }
        else if(!options.includes("")){
            statustext.textContent = `Draw!`
        }
        else{
            changeplayer();
        }
}
function restartbtn(){
         currentplayer = "X";
         options = ["", "", "", "", "", "", "", "", ""];
         statustext.textContent = `${currentplayer}'s turn`;
         cells.forEach(cells => cells.textContent = "");
         running = true;
         
}