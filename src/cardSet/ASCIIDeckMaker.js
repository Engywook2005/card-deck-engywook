/* global module */
/* global require */

const DeckMaker = require('./DeckMaker');

class ASCIIDeckMaker extends DeckMaker {

  /**
   * Numbered card face as ASCII for stdout.
   *
   * @param {Object} suit
   * @param {Object} template
   * @returns {String}
   */
  fillNumberedCard(suit, template) {
    let cardFace =    '/---------\\\n';

    //cardFace = `${cardFace}${emptyRow}`;

    template.forEach((row) => {
      cardFace = `${cardFace}|`;

      row.forEach((suitHolder) => {
        const threeSpace = ' ';
        const symbolSpace = `${suit.symbol}`;
        const nextSymbol = suitHolder ? symbolSpace: threeSpace;

        cardFace = `${cardFace}${threeSpace}`;
        cardFace = `${cardFace}${nextSymbol}`;
        cardFace = `${cardFace}${threeSpace}`;
      });

      cardFace = `${cardFace}|\n`;
      //cardFace = `${cardFace}${emptyRow}`;
    });

    cardFace = `${cardFace}\\---------/`;

    return cardFace;
  }
}

module.exports = ASCIIDeckMaker;
