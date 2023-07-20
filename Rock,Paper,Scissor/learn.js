const playertext = document.querySelector("#Playertext");
const computertext = document.querySelector("#computertext");
const resulttext = document.querySelector("#resulttext");
const choicebtns = document.querySelectorAll(".choicebtn");
let player;
let computer;
let result;

choicebtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerturn();
    playertext.textContent = `Player: ${player}`;
    computertext.textContent =`Computer: ${computer}`;
    resulttext.textContent = checkwinner();
}));

function computerturn(){
    const randnum = Math.floor(Math.random() * 3) + 1;

    switch(randnum){
        case 1:
        computer = "Rock";
        break;
        case 2:
        computer = "Paper";
        break;
        case 3:
        computer = "Scissor";
        break;  
    }
}
function checkwinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "Rock"){
        return (player == "Paper") ? "You Win!" : "Computer Win!"
    }
    else if(computer == "Paper"){
        return(player == "Scissor") ? "You Win!" : "Computer Win!"
    }
    else if(computer == "Scissor"){
        return(player == "Rock") ? "You Win!" : "Computer Win!"

    }

}