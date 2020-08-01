/* global require */

const DeckMaker = require('../src/deck/DeckMakers/ASCIIDeckMaker');
const numCards = require('../src/utils/constants').numCards;

const ASCIIDeck = require('../src').ASCIIDeck;

const suit = {
        symbol: '♥',
        color: '#ff0000'
      };

const dm = new DeckMaker(suit);

const cardFace = dm.fillNumberedCard(suit, 10, numCards[10]);
console.log(cardFace);

/*
const dm2 = new DeckMaker(suit);
const dSuit = dm2.fillSuit();

dSuit.forEach((card) => {
  console.log(card.getFace());
});
*/

const asciiDeck = new ASCIIDeck();
const deck = asciiDeck.getDeck();

deck.forEach((card) => {
  console.log(card.getFace());
});
