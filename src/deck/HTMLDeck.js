const HoyleDeck = require('./HoyleDeck');
const DeckMaker = require('./DeckMakers/HTMLDeckMaker');

class HTMLDeck extends HoyleDeck {

  /**
   * Builds standard 52-card deck, with or without jokers, for HTML deck.
   *
   * @param numDecks
   * @param numJokers
   */
  constructor(numDecks = 1, numJokers = 0) {
    super(DeckMaker, numDecks, numJokers);
  }
}

module.exports = HTMLDeck;
