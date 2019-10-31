let Letter = function(char) {
    this.char = char;
    this.guessed = false;

    this.getChar = function() {
        if (this.guessed) {
            return this.char;
        } else {
            return "_";
        }
    }

    this.checkLetter = function(letter) {
        if (letter === this.char) {
            this.guessed = true;
            return true;
        }
        return false;
    }
}


module.exports = Letter;