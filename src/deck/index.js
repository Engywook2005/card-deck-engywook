/* global module */
/* global require */

const ASCIIDeckMaker = require('./DeckMakers/ASCIIDeckMaker');
const HTMLDeckMaker = require('./DeckMakers/HTMLDeckMaker');

const BasicDeck = require('./BasicDeck');
const HTMLDeck = require('./HTMLDeck');
const ASCIIDeck = require('./ASCIIDeck');

// If needing to create a specialized deck, start from BasicDeck so at least shuffle, draw, drop, etc are available.
// Would also need to use one of the deckmakers in this case.

module.exports = {
  ASCIIDeckMaker: ASCIIDeckMaker,
  HTMLDeckMaker: HTMLDeckMaker,
  BasicDeck: BasicDeck,
  HTMLDeck: HTMLDeck,
  ASCIIDeck: ASCIIDeck
}
