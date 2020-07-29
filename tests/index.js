/* global require */

const DeckMaker = require('../src/cardSet/ASCIIDeckMaker');
const numCards = require('../src/utils/constants').numCards;

const suit = {
        symbol: '♥',
        color: '#ff0000'
      };

const dm = new DeckMaker(suit);

const cardFace = dm.fillNumberedCard(suit, 10, numCards[10]);
console.log(cardFace);

const dm2 = new DeckMaker(suit);
const deck = dm2.fillSuit();

deck.forEach((card) => {
  console.log(card.getFace());
});

