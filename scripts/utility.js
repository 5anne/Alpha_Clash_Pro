function hideElementById(elementId) {
    const homeSection = document.getElementById(elementId);
    homeSection.classList.add('hidden');
}
function showElementById(elementId) {
    const playgroundSection = document.getElementById(elementId);
    playgroundSection.classList.remove('hidden');
}

function setBackgroundById(elementId) {
    const backgroundColor = document.getElementById(elementId);
    backgroundColor.classList.add('bg-orange-500');
}

function removeBackgroundById(elementId) {
    const backgroundColor = document.getElementById(elementId);
    backgroundColor.classList.remove('bg-orange-500');
}
function getScoreById(elementId) {
    const current_Score = document.getElementById(elementId);
    const currentScore = parseInt(current_Score.innerText);
    return currentScore;
}
function setInnerText(elementId, number) {
    const text = document.getElementById(elementId);
    text.innerText = number;
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const index = Math.round(Math.random() * 25);
    // console.log(index);

    return alphabets[index];

}