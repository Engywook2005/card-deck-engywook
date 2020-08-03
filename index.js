/* global module */
/* global require */

const CardDecks = require('./src');

// Only use the deckmaker when populating a dynamic deck. Would need to use BasicDeck as well to set up own DeckMaker
// behavior.
//
module.exports.ASCIIDeckMaker = CardDecks.ASCIIDeckMaker;
module.exports.HTMLDeckMaker = CardDecks.HTMLDeckMaker;

// For a regular according-to-hoyle deck just use ASCIIDeck or HTMLDeck
// @TODO Actually I am getting both decks even if I do not ask for them. Will need to have separate modules for html and
// ASCII and have the base code in yet another library
module.exports.BasicDeck = CardDecks.BasicDeck;
module.exports.HTMLDeck = CardDecks.HTMLDeck;
module.exports.ASCIIDec = CardDecks.ASCIIDeck;
