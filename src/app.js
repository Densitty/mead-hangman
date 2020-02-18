import uuidv4 from 'uuid/v4';
import getPuzzle from './request.js';
import Hangman from './script.js'

const word = document.querySelector('.word');
let game;
console.log(uuidv4());
// document.querySelector('.word').textContent = game.getPuzzle;
// document.querySelector('.remainder').textContent = game.getStatusMessage;
// console.log(game.status)

window.addEventListener('keypress', e => {
    const myGuess = String.fromCharCode(e.charCode); // we can also use the code -> const myGuess = e.key;
    game.makeGuess(myGuess);
    render()

    //console.log(game.status)

})

const render = () => {
    word.innerHTML = '';
    document.querySelector('.remainder').textContent = game.getStatusMessage;

    game.getPuzzle.split('').forEach(letter => {
        const eachLetter = document.createElement('span');
        eachLetter.textContent = letter;
        word.appendChild(eachLetter)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game = new Hangman(puzzle, 5);
    render();
}

document.querySelector('button').addEventListener('click', () => {
    startGame()
})

startGame()


/*
getPuzzlle((error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data)
    }
}, 2)

gettPuzzle(1).then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})*/