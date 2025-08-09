let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice'); // fixed typo

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    const msg = document.querySelector('#msg');
    msg.textContent = "It's a Draw!";
}

const showWinner = (userWins) => {
    const msg = document.querySelector('#msg');
    const compScoreElem = document.querySelector('#comp-score');
    const userScoreElem = document.querySelector('#user-score');
    if(userWins){
        userScore++;
        userScoreElem.textContent = userScore;
        msg.textContent = "You Win!";
    }else{
        compScore++;
        compScoreElem.textContent = compScore;
        msg.textContent = "Computer Wins!";
    }
}

const updateCompChoiceImg = (choice) => {
    const imgElem = document.querySelector('#comp-choice-img');
    imgElem.src = `images/${choice}.png`;
    imgElem.alt = choice.charAt(0).toUpperCase() + choice.slice(1);
}

const playGame = (userChoice) => {
    const comChoice = genCompChoice();
    updateCompChoiceImg(comChoice); // Show computer's choice

    if(userChoice === comChoice){
        drawGame();
        return;
    }

    let userWins = true;
    if(userChoice === 'rock'){
        userWins = comChoice === 'paper'? false : true;
    }else if(userChoice === 'paper'){
        userWins = comChoice === 'scissor'? false : true;
    }else {
        userWins = comChoice === 'rock'? false : true;
    }

    showWinner(userWins);
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.querySelector('img').id;
        playGame(userChoice);
    });
});


const resetGame = () => {
    userScore = 0;
    compScore = 0;
    document.querySelector('#user-score').textContent = userScore;
    document.querySelector('#comp-score').textContent = compScore;
    document.querySelector('#msg').textContent = "Make your choice!";
    document.querySelector('#comp-choice-img').src = "images/rock.png"; // or a default image
    document.querySelector('#comp-choice-img').alt = "Computer Choice";
}

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', resetGame);