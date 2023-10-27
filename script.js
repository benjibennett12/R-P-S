const userScore = document.getElementById('UserScore');
const computerScore = document.getElementById('ComputerScore');
const tieScore = document.getElementById('Ties');
const choiceButtons = document.querySelectorAll('.Choices button');
const userChoiceImage = document.getElementById('UserChoiceImage');
const computerChoiceImage = document.getElementById('Player2');
const playButton = document.getElementById('Play');
const resetButton = document.getElementById('Reset');

let userChoice = document.getElementById('Player1').value;
let rounds = 0;
const maxRounds = 10;

choiceButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        userChoice = button.value;
        document.getElementById('Player1').value = userChoice;
        userChoiceImage.src = button.querySelector('img').src;
    });
});

function computerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'Rock';
    } else if (randomNum === 1) {
        return 'Paper';
    } else if (randomNum === 2) {
        return 'Scissor';
    }
}

playButton.addEventListener('click', function () {
    if (rounds < maxRounds) {
        lets_play();
        rounds++;


        if (rounds === maxRounds) {
            const userScoreInt = parseInt(userScore.textContent);
            const computerScoreInt = parseInt(computerScore.textContent);

            if (userScoreInt > computerScoreInt) {
                alert('Game over! User wins the game.');
            } else if (userScoreInt < computerScoreInt) {
                alert('Game over! Computer wins the game.');
            } else {
                alert('Game over! It\'s a tie.');
            }
        }
    }
    document.getElementById('Player2').value = computerChoice;
    userChoiceImage.src = button.querySelector('img').src;
});

function lets_play() {
    const computer = computerChoice();
    console.log(computer);

    computerChoiceImage.src = `image/${computer}.png`;

    if (userChoice === computer) {
        displayResult("It's a tie");
    } else if (
        (userChoice === 'Rock' && computer === 'Scissor') ||
        (userChoice === 'Scissor' && computer === 'Paper') ||
        (userChoice === 'Paper' && computer === 'Rock')
    ) {
        displayResult('User wins');
    } else {
        displayResult('Computer wins');
    }
}

function displayResult(result) {
    if (result === 'User wins') {
        let currentScore = parseInt(userScore.textContent);
        currentScore++;
        userScore.textContent = currentScore;
    } else if (result === 'Computer wins') {
        let currentScore = parseInt(computerScore.textContent);
        currentScore++;
        computerScore.textContent = currentScore;
    } else if (result === "It's a tie") {
        let currentScore = parseInt(tieScore.textContent);
        currentScore++;
        tieScore.textContent = currentScore;
    }
}

resetButton.addEventListener('click', function () {
    console.log(userChoice);
    userChoice = '';
    rounds = 0;
    tieScore.textContent = 0;
    userChoiceImage.src = '';
    computerChoiceImage.src = '';
    userScore.textContent = 0;
    computerScore.textContent = 0;
});

