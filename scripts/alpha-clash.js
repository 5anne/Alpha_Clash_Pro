// function playNow(){
//     // console.log('Play start now!');
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function playAgain(){
    hideElementById('final-score');
    hideElementById('home-screen');
    showElementById('play-ground');

    setInnerText('current-score', 0);
    setInnerText('current-life', 5);
    removeBackgroundById('current-alphabet');
    continueGame();
}


function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    const current_Score = getScoreById('current-score');
    setInnerText('end-score', current_Score);
}


function handleKeyboardButton(event){
    // console.log(event.key);
    const playerPressed = event.key;

    const  currentAlphabetElemnet = document.getElementById('current-alphabet');
    const expectedAlphabet = currentAlphabetElemnet.innerText.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if(playerPressed === 'Escape'){
        gameOver();
    }   

    if(playerPressed === expectedAlphabet){
        console.log('You get a point');
        console.log('You have pressed correctly', expectedAlphabet);

        const current_Score = document.getElementById('current-score');
        const currentScore = parseInt(current_Score.innerText);

        const newScore = currentScore + 1;
        current_Score.innerText = newScore;

        removeBackgroundById('current-alphabet');
        continueGame();
    }
    else{
        console.log('You missed. You lost a life');
        const currentLifeElement = document.getElementById('current-life');
        const currentLife = parseInt(currentLifeElement.innerText);

        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
        if(newLife === 0){
            gameOver();
        }
    }
}


document.addEventListener('keyup', handleKeyboardButton);


function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    const  currentAlphabetElemnet = document.getElementById('current-alphabet');
    currentAlphabetElemnet.innerText = alphabet;

    setBackgroundById(alphabet);
}


function playNow(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame();
}

