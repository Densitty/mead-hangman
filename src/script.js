class Hangman {
    constructor(word, numberOfGuesses) {
        this.word = word.toLowerCase().split('');
        this.guess = numberOfGuesses;
        this.guessedLetters = [];
    }

    gameCheck() {
        let finished = true

        this.word.forEach(letter => {
            if ((this.guessedLetters.includes(letter)) || letter === ' ') {
                //console.log(this.guessedLetters.includes(letter) || letter === ' ')
                //still maintain that finished is true, hence no need to state it
                //if we should put line 9 here, immediately we enter the last letter in the word, the game just ends there
            } else {
                finished = false
            }
        })

        if (this.guess === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else if (!finished) {
            this.status = 'playing'
        }
    }
    get getStatusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.guess}`
        } else if (this.status === 'failed') {
            return `Good attempt! The word was ${this.word.join('')}`
        } else {
            return 'Yipeee!!! You guessed correctly'
        }
    }
    get getPuzzle() {
        let puzzle = '';
        this.word.forEach((letter, index) => {

            this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*';

        })
        return puzzle
    }
}

// Hangman.prototype.guessedLetters = [];

Hangman.prototype.status = 'playing';

Hangman.prototype.makeGuess = function (myGuess) {
    myGuess = myGuess.toLowerCase();

    const isGuessUnique = !this.guessedLetters.includes(myGuess);
    const isGuessCorrect = !this.word.includes(myGuess)

    if (this.status !== 'playing') {
        return
        //once the status changes to either 'finished' or 'failed' the lines of code below stop running
    }

    if (isGuessUnique) {
        //this.guessedLetters.push(myGuess)
        this.guessedLetters = [...this.guessedLetters, myGuess]
        //onsole.log(isGuessUnique)
    }

    if (isGuessUnique && isGuessCorrect) {
        this.guess--
    }

    this.gameCheck();
}





// const actionator = function (word) {
//     word = word.toLowerCase().split('');
//     word[0].toUpperCase()
//     word.join('');
//     console.log(word)
// }

// actionator('ebi')
export { Hangman as default }