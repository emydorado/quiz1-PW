const words = ['apple', 'mango', 'board', 'shirt', 'coffee', 'computer'];

const word = document.getElementById('word');
const input = document.getElementById('inputLetter');
const randomButton = document.getElementById('randomButton');
const verifyButton = document.getElementById('verify');
const mistakes = document.getElementById('mistakes');
const tries = document.getElementById('tries');
const result = document.getElementById('result');

let randomWord;
let numberTries = 0;
let splittedWords;
let blankWords;

randomButton.addEventListener('click', function () {
	const numberRandom = Math.floor(Math.random() * words.length);
	randomWord = words[numberRandom];
	splittedWords = randomWord.split('');
	console.log(randomWord);

	blankWords = Array(splittedWords.length).fill('_'); // se hace el metodo array para poder crear una copia en lugar de modificar elarray original y así poder hacer la comparación al final
	word.innerText = blankWords;
});

displayWord = () => {
	word.textContent = blankWords;
};

verifyButton.addEventListener('click', function () {
	const matchLetter = randomWord.includes(input.value);
	let letter = input.value;

	if (matchLetter) {
		splittedWords.forEach((char, index) => {
			if (char === letter) {
				blankWords[index] = letter;
			}
		});
	} else {
		numberTries++;
		tries.textContent = numberTries;
		mistakes.textContent += input.value;
	}
	displayWord();

	if (!blankWords.includes('_')) {
		result.textContent = '¡Ganaste!';
	} else if (numberTries >= 6) {
		result.textContent = '¡Perdiste!';
	}
});
