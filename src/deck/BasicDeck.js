/* global module */

/**
 * If using a different card deck e.g. Tarot start here.
 */
class BasicDeck {
  constructor() {
    // Current deck.
    this.deck = [];

    // Previous decks, allowing for undo.
    this.deckHistory = [];
  }

  /**
   * Returns deck. Should really only need to be called once per instantiation of HoyleDeck class or its subclasses.
   * Other returns of this.deck are to allow method chaining.
   *
   * @returns {[]|*[]}
   */
  getDeck() {
    return this.deck;
  }

  /**
   * Shuffles and returns deck
   */
  shuffle() {
    this.updateHistory();

    // @TODO actual shuffling.
    return this.deck;
  }

  /**
   * Draw one or more cards.
   *
   * @param {number}  numCards  Number of cards to draw. Default is 1.
   */
  draw(numCards = 1) {
    const drawnCards = [];

    this.updateHistory();

    while(numCards > 0 && this.deck.length > 0) {
      drawnCards.push(this.deck.shift());
    }

    return drawnCards;
  }

  /**
   * Returns cards to deck.
   *
   * @param {Array}   cards  Card to be sent back to deck.
   */
  drop(cards) {
    this.updateHistory();

    cards.forEach((card) => {
      this.deck.push(card);
    });

    return this.deck;
  }

  /**
   * After error returns cards to random point in deck.
   *
   * @param {Array}   cards
   */
  burn(cards) {
    this.updateHistory();

    // @TODO

    return this.deck();
  }

  /**
   * Push existing deck into history.
   */
  updateHistory() {
    this.deckHistory.push(this.deck.slice());
  }

  undo() {
    this.deck = this.deckHistory.pop();

    return this.deck;
  }
}

module.exports = BasicDeck;
