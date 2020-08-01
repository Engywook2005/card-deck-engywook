/* global module */
/* global require */

const CardDecks = require('./src');

// Only use the deckmaker when populating a dynamic deck. Would need to use BasicDeck as well to set up own DeckMaker
// behavior.
//
// For a regular according-to-hoyle deck just use ASCIIDeck or HTMLDeck
module.exports.ASCIIDeckMaker = CardDecks.ASCIIDeckMaker;
module.exports.HTMLDeckMaker = CardDecks.HTMLDeckMaker;

module.exports.BasicDeck = CardDecks.BasicDeck;
module.exports.HTMLDeck = CardDecks.HTMLDeck;
