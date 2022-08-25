const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1
  let card2
  let card3
  let turn1
  let deck1
  let round1
});

beforeEach(() => {
  card1 = new Card(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'object');
  card2 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['object', 'array', 'function'], 'object');
  card3 = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  turn1 = new Turn('array', card1);
  deck1 = new Deck([card1, card2, card3]);
  round1 = new Round(deck1);

});

it('should be a function', () => {

  expect(Round).to.be.a('function');
});

it('should return current card being played', () => {

  expect(round1.returnCurrentCard()).to.eql(card1)
});

it('should make a new instance of turn', () => {

  expect(turn1).to.be.an.instanceOf(Turn);
});

it('should update turn count', () => {

  round1.takeTurn('object');

  expect(round1.turns).to.equal(1);
});

it('should update card to be next card', () => {
  expect(round1.returnCurrentCard()).to.eql(card1);

  round1.takeTurn('object');

  expect(round1.returnCurrentCard()).to.eql(card2)
});

it('should give feedback on users answer', () => {

  expect(round1.takeTurn('array')).to.equal('incorrect!')
  expect(round1.takeTurn('object')).to.equal('correct!')
});

it('should return percent of correct answers', () => {

  round1.takeTurn('object');
  expect(round1.calculatePercentCorrect()).to.equal(100)
  round1.takeTurn('array');
  expect(round1.calculatePercentCorrect()).to.equal(50)
  round1.takeTurn('mutator method');
  expect(round1.calculatePercentCorrect()).to.equal(66)
});

it('should provide a message and percent correct when ending the round', () => {
  
  expect(round1.endRound()).to.equal(`** Round over! ** You answered ${round1.calculatePercentCorrect()}% of the questions correctly!`)
});







