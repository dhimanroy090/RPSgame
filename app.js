//Declaring Variables
//uS=userscore
//CS=computerscore

var uS = 0;
var CS = 0;
const uS_span = document.getElementById("user-score");
const CS_span = document.getElementById("computer-score");
const sccoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Random choice function from computer

function computerChoice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)];
}

//Function declaration for Win,lost,draw

function win(userInput, compChoice) {
    uS++;
    uS_span.innerHTML = uS;
    CS_span.innerHTML = CS;
    if (userInput === 'r' && compChoice === 's') {
        result_p.innerHTML = `Computer chosed Scissors. You Win ✅🎉`;
    }
    else if (userInput === 'p' && compChoice === 'r') {
        result_p.innerHTML = `Computer chosed Rock. You Win ✅🎉`;
    }
    else if (userInput === 's' && compChoice === 'p') {
        result_p.innerHTML = `Computer chosed Paper. You Win ✅🎉`;
    }
}

function Lose(userInput, compChoice) {
    CS++;
    uS_span.innerHTML = uS;
    CS_span.innerHTML = CS;
    if (userInput === 'r' && compChoice === 'p') {
        result_p.innerHTML = "Computer chosed Paper 📜 . You Lost ❌";
    }
    else if (userInput === 'p' && compChoice === 's') {
        result_p.innerHTML = `Computer chosed Scissors ✂ . You Lost ❌`;
    }
    else if (userInput === 's' && compChoice === 'r') {
        result_p.innerHTML = `Computer chosed Rock ⬛ . You Lost ❌`;
    }

}

function Draw(userInput, compChoice) {
    uS_span.innerHTML = uS;
    CS_span.innerHTML = CS;
    if (userInput === 'r' && compChoice === 'r') {
        result_p.innerHTML = `Computer chosed Rock ⬛ . It's a Draw.`;
    }
    else if (userInput === 'p' && compChoice === 'p') {
        result_p.innerHTML = `Computer chosed Paper 📜 . It's a Draw.`;
    }
    else if (userInput === 's' && compChoice === 's') {
        result_p.innerHTML = `Computer chosed Scissors ✂ . It's a Draw.`;
    }
}

// Getting called by main function with info of user choice
// Calls function Win , Lose and Draw .

function game(userInput) {
    const compChoice = computerChoice();
    const UserChoice = userInput + compChoice;
    if (UserChoice === "rs" || UserChoice === "pr" || UserChoice === "sp") {
        win(userInput, compChoice);
        console.log("Win");
    }
    else if (UserChoice === "rp" || UserChoice === "ps" || UserChoice === "sr") {
        Lose(userInput, compChoice);
        console.log("Lose");
    }
    else if (UserChoice === "rr" || UserChoice === "pp" || UserChoice === "ss") {
        Draw(userInput, compChoice);
        console.log("Draw");
    }
}


// Declaration and calling of main function
// Initialization of game

function main() {
    rock_div.addEventListener('click', function () {
        game('r');
    })
    paper_div.addEventListener('click', function () {
        game('p');
    })
    scissors_div.addEventListener('click', function () {
        game('s');
    })
}

main();