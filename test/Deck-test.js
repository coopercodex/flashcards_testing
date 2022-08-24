const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Deck = require('../src/Deck');

describe('Deck', () => {
  let card1
  let card2
  let card3
  let deck1
});

beforeEach(() => {
  card1 = new Card(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'object');
  card2 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['object', 'array', 'function'], 'object');
  card3 = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  deck1 = new Deck([card1, card2, card3]);
});

it('should be a function', () => {
  expect(Deck).to.be.a('function');
});