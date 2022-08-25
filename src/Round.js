const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.holder[0];
  }

  takeTurn(guess) {
    let turn1 = new Turn(guess, this.returnCurrentCard());
    turn1.evaluateGuess()
    if (!turn1.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard())
    }
    this.turns++;
    this.deck.holder.shift();
    return turn1.giveFeedback();
  }

  calculatePercentCorrect() {
    let result = ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
    return Math.trunc(result);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}



module.exports = Round;