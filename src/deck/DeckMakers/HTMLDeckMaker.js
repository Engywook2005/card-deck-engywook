/* global module */
/* global require */

const DeckMaker = require('./DeckMaker');
const docu = require('html-element').document;

/**
 * Creates HTML versions of card
 */
class HTMLDeckMaker extends DeckMaker {

  /**
   * Numbered card face as HTML.
   *
   * @param {Object} suit
   * @param {Object} template
   * @returns {HTMLDivElement}
   */
  fillNumberedCard(suit, template) {
    const cardFace = docu.createElement('div');
    cardFace.setAttribute(
      'style',
      {
        color: suit.color
      });

    template.forEach((row) => {
      const cardRow = docu.createElement('div');

      row.forEach((symbolHolder) => {
        const suitSymbol = docu.createElement('div');
        suitSymbol.innerText = symbolHolder ? suit.symbol : '';

        suitSymbol.setAttribute('style',
          {
            'float': 'left',
            'minWidth': '1rem',
            'marginLeft': '1rem',
            'marginRight': '1rem'
          });
        cardRow.addChild(suitSymbol);
      })

      cardFace.addChild(cardRow);
    });

    return cardFace;
  }
}

module.exports = HTMLDeckMaker;
