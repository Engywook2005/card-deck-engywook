/* global require */

const DeckMaker = require('../src/cardSet/ASCIIDeckMaker');
const numCards = require('../src/utils/constants').numCards;

const suit = {
        symbol: '♥',
        color: '#ff0000'
      };

const dm = new DeckMaker(suit);

const cardFace = dm.fillNumberedCard(suit, numCards[10]);

console.log(cardFace);
