const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound
  }

  start() {
    this.createRound();
    this.printMessage(this.createDeck(), this.createRound());
    this.printQuestion(this.createRound());
  }

  createRound() {
    this.currentRound = new Round(this.createDeck());
    return this.currentRound;
  }

  createDeck() {
    let deck = new Deck(this.createCards());
    return deck;
  }

  createCards() {
    let cards = prototypeQuestions.map(card => {
      return card
    });
    return cards;
  }



  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;