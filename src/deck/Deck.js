/* global module */
/* global require */

const DeckMaker = require('./DeckMakers/DeckMaker');

class Deck {

  /**
   * Builds standard 52-card deck, with or without jokers.
   *
   * @param {DeckMaker}   deckMaker   Type of DeckMaker to use. Supports ASCIIDeckMaker or HTMLDeckMaker currently.
   * @param {Number}      numDecks    Number of decks to use.
   * @param {Number}      numJokers   Number of jokers to include. Note default is 0, not 2.
   */
  constructor(deckMaker, numDecks = 1, numJokers = 0) {

    // Current deck.
    this.deck = [];

    // Previous decks, allowing for undo.
    this.deckHistory = [];

    const suits = ['♣', '♠', '♦', '♥'];

    for(let i = 0; i < numDecks; i++) {
      suits.forEach((suit) => {
        const dm = new deckMaker(suit);

        const cards = dm.fillSuit();

        this.deck = this.deck.concat(deck, cards);
        this.deckHistory.push(this.deck);
      });
    }
  }

  /**
   * Returns deck. Should really only need to be called once per instantiation of Deck class or its subclasses.
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

module.exports = Deck;
