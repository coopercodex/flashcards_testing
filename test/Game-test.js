const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', () => {
  let card1
  let card2
  let card3
  let deck1
  let round1
  let game1
});

beforeEach(() => {
  card1 = new Card(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'object');
  card2 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['object', 'array', 'function'], 'object');
  card3 = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  deck1 = new Deck([card1, card2, card3]);
  round1 = new Round(deck1);
  game1 = new Game(round1, deck1);
});

it('should be a function', () => {

  expect(Game).to.be.a('function');
});

it('Should create the cards at the start of a new game', () => {
  const cards = game1.createCards()

  expect(cards).to.be.an('array')
});

it('should create an instance of deck', () => {

  expect(deck1).to.be.an.instanceOf(Deck);

});

it('should create a deck of cards', () => {

  expect(game1.createDeck()).to.be.an('object');

});

it ('should create an instance of round', () => {

  expect(round1).to.be.an.instanceOf(Round);

})

