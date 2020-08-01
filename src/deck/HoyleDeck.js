/* global module */
/* global require */

const BasicDeck = require('./BasicDeck');
const DeckMaker = require('./DeckMakers/DeckMaker');

class HoyleDeck extends BasicDeck {

  /**
   * Builds standard 52-card deck, with or without jokers.
   *
   * @param {DeckMaker}   deckMaker   Type of DeckMaker to use. Supports ASCIIDeckMaker or HTMLDeckMaker currently.
   * @param {Number}      numDecks    Number of decks to use.
   * @param {Number}      numJokers   Number of jokers to include. Note default is 0, not 2.
   */
  constructor(deckMaker, numDecks = 1, numJokers = 0) {
    super();

    const suits = [
      {symbol: '♣', color: '#000000'},
      {symbol: '♠', color: '#000000'},
      {symbol: '♦', color: '#FF0000'},
      {symbol: '♥', color: '#FF0000'}
    ];

    for(let i = 0; i < numDecks; i++) {
      suits.forEach((suit) => {
        const dm = new deckMaker(suit);

        const cards = dm.fillSuit();

        this.deck = this.deck.concat(cards);
      });
    }

    this.updateHistory();
  }
}

module.exports = HoyleDeck;
