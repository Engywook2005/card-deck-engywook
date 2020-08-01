/* global module */
/* global require */

const CardDecks = require('./src');

// Only use the deckmaker when populating a dynamic deck. For a regular according-to-hoyle deck just use ASCIIDeck or
// HTMLDeck
module.exports.ASCIIDeckMaker = CardDecks.ASCIIDeckMaker;
module.exports.HTMLDeckMaker = CardDecks.HTMLDeckMaker;

// When just using a regular deck.
