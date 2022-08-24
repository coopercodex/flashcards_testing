const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1
  let card2
  let card3
  let deck1
  let round1
});

beforeEach(() => {
  card1 = new Card(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'object');
  card2 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['object', 'array', 'function'], 'object');
  card3 = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  turn1 = new Turn('array', card1);
  turn2 = new Turn('object', card2);
  deck1 = new Deck();
  deck1.holder = [card1, card2, card3];
  round1 = new Round(card1);

});

it('should be a function', () => {

  expect(Round).to.be.a('function');
});

it('should return current card', () => {

  expect(round1.returnCurrentCard()).to.equal(card1) // this is failing look at the logs and make sure youre instantiating correctly
});



