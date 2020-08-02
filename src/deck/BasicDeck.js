/* global module */

/**
 * If using a different card deck e.g. Tarot start here.
 */
class BasicDeck {
  constructor() {
    // Current deck.
    this.cards = [];

    // Previous decks, allowing for undo.
    this.deckHistory = [];
  }

  /**
   * Returns deck. Should really only need to be called once per instantiation of HoyleDeck class or its subclasses.
   * Other returns of this.deck are to allow method chaining.
   *
   * @returns {[]|*[]}
   */
  getCards() {
    return this.cards;
  }

  /**
   * Shuffles and returns deck.
   *
   * @returns {[]}
   */
  shuffle() {
    this.updateHistory();

    const shuffled = [];

    while(this.cards.length > 0) {
      const nextPos = Math.floor(Math.random() * this.cards.length);

      shuffled.push(this.cards.splice(nextPos, 1)[0]);
    }

    this.cards = shuffled;

    return this.cards;
  }

  /**
   * Draw one or more cards.
   *
   * @param {number}  numCards  Number of cards to draw. Default is 1.
   * @returns [Card]
   */
  draw(numCards = 1) {
    const drawnCards = [];

    this.updateHistory();

    while(numCards > 0 && this.cards.length > 0) {
      drawnCards.push(this.cards.shift());
      numCards -= 1;
    }

    return drawnCards;
  }

  /**
   * Returns cards to deck.
   *
   * @param {[Card]}   returned  Cards to be sent back to deck.
   */
  returnCards(returned) {
    this.updateHistory();

    returned.forEach((card) => {
      this.cards.push(card);
    });

    return this.cards;
  }

  /**
   * After error returns cards to random point in deck.
   *
   * @param {Array}   cards
   */
  burn(cards) {
    this.updateHistory();

    // @TODO

    return this.cards();
  }

  /**
   * Push existing deck into history.
   */
  updateHistory() {
    this.deckHistory.push(this.cards.slice());
  }

  undo() {
    this.cards = this.deckHistory.pop();

    return this.cards;
  }
}

module.exports = BasicDeck;
