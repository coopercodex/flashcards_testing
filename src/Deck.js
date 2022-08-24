class Deck {
  constructor(holder) {
    this.holder = [];
  }

  countCards() {
    return this.holder.length;
  }
}



module.exports = Deck;