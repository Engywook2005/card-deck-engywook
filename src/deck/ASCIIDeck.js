const HoyleDeck = require('./HoyleDeck');
const DeckMaker = require('./DeckMakers/ASCIIDeckMaker');

class ASCIIDeck extends HoyleDeck {

  /**
   * Builds standard 52-card deck, with or without jokers, for ASCII deck.
   *
   * @param numDecks
   * @param numJokers
   */
  constructor(numDecks, numJokers) {
    super(DeckMaker, numDecks = 1, numJokers = 0);
  }
}

module.exports = ASCIIDeck;
