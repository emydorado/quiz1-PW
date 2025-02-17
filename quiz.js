const words = [
    'apple',
    'mango',
    'board',
    'shirt',
    'coffee',
    'computer',
]

const word = document.getElementById('word')
const input = document.getElementById('inputLetter')
const randomButton = document.getElementById('randomButton')
const verifyButton = document.getElementById('verify')
const mistakes = document.getElementById('mistakes')
const tries = document.getElementById('tries')

let randomWord
let numberTries = 0
let splittedWords
let blankWords 

randomButton.addEventListener('click', function () {
    const numberRandom = Math.floor(Math.random() * words.length)
    randomWord = words[numberRandom];
    splittedWords = randomWord.split("")
    console.log(randomWord);

    blankWords = splittedWords.fill('_')
    word.textContent=blankWords

})

verifyButton.addEventListener('click', function () {
    const matchLetter = randomWord.includes(input.value);

    if (matchLetter) {
        console.log(input.value);
    }else{
        numberTries++
        tries.textContent=numberTries
        mistakes.textContent+=input.value
    }
})

