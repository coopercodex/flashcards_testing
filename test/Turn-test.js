const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card1
  let card2
  let turn1
  let turn2
});

beforeEach(() => {
  card1 = new Card(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'object');
  card2 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['object', 'array', 'function'], 'object');
  turn1 = new Turn('array', card1);
  turn2 = new Turn('object', card2);
});

it('should be a function', () => {
  expect(Turn).to.be.a('function');
});

it('should be an instance of Turn', () => {
  expect(turn1).to.be.an.instanceOf(Turn);
});

it('should return a guess', () => {
  var e = turn1.returnGuess();

  expect(e).to.equal('array');
});

it('should return a card', () => {
  var e = turn1.returnCard();

  expect(e).to.equal(card1);
});

it('should evaluate guess', () => {
  var incorrectGuess = turn1.evaluateGuess();
  var correctGuess = turn2.evaluateGuess();

  expect(incorrectGuess).to.equal(false);
  expect(correctGuess).to.equal(true);
});

it('should give feedback', () => {
  expect(turn1.giveFeedback()).to.equal('incorrect!');
  expect(turn2.giveFeedback()).to.equal('correct!');
});


