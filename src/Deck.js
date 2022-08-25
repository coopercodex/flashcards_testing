class Deck {
  constructor(cards) {
    this.holder = cards;
  }

  countCards() {
    return this.holder.length;
  }
}



module.exports = Deck;