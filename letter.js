let Letter = function(char) {
    this.char = char;
    this.guessed = false;

    // Return either the character or an underscore.
    this.getChar = function() {
        if (this.guessed) {
            return this.char;
        } else {
            return "_";
        }
    }

    // Check if a guessed letter is correct.
    this.checkLetter = function(letter) {
        if (letter === this.char) {
            this.guessed = true;
            return true;
        }
        return false;
    }
}


module.exports = Letter;