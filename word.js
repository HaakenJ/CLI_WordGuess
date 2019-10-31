const Letter = require("./letter.js");

let Word = function (word) {
    this.word = word;

    let wordArr = [];
    for (let i = 0; i < word.length; i++) {
        wordArr[i] = new Letter(word[i]);
    }
    this.wordArr = wordArr;

    this.checkGuess = function(guess) {
        for (let i = 0; i < this.wordArr.length; i++) {
            this.wordArr[i].checkLetter(guess);
        }
    }

    this.isWordGuessed = function() {
        for (let i = 0; i < wordArr.length; i++) {
            if (!wordArr[i].guessed) {
                return false;
            }
        }
        return true;
    }
    
    Word.prototype.toString = function() {
        let result = [];
        for (let i = 0; i < this.wordArr.length; i++) {
            result[i] = this.wordArr[i].getChar();
        }
        return result.join(" ");
    }
}

module.exports = Word;


