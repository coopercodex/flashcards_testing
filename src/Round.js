const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
  }
  
  returnCurrentCard() {
   return this.deck.holder[0];
  }

  takeTurn(guess) {
    let turn1 = new Turn(guess, this.returnCurrentCard());
    this.turn ++;
    this.deck.holder.shift();
    // console.log(this.deck.holder)
  }
}



module.exports = Round;