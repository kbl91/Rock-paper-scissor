let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result > p');
const rockdiv = document.getElementById('rock');
const paperdiv = document.getElementById('paper');
const scissordiv = document.getElementById('scissor');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = userChoice + " beats " + computerChoice + '. You win!';
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result.innerHTML = computerChoice + ' beats ' + userChoice + '. You lose.';
}

function draw(userChoice, computerChoice) {
    result.textContent = 'It\'s a tie';
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rockdiv.addEventListener('click', function () {
        game("rock");
    })

    paperdiv.addEventListener('click', function () {
        game("paper");
    })

    scissordiv.addEventListener('click', function () {
        game("scissor");
    })
}

main();
