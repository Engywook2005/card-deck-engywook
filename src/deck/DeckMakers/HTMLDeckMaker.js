/* global module */
/* global require */

const DeckMaker = require('./DeckMaker');

/**
 * Creates HTML versions of card
 */
class HTMLDeckMaker extends DeckMaker {

  /**
   * Numbered card face as HTML.
   *
   * @param {Object} suit
   * @param {Number} num
   * @param {Object} template
   * @returns {String}
   */
  fillNumberedCard(suit, num, template) {

    // @TODO perhaps should use HTMLReactParser here? This would presume though that the only use of this class would
    // be in React.
    let cardFace = `<div style = "color: ${suit.color}; clear: left;">`

    template.forEach((row) => {
      let cardRow = '<div style="clear: left; height: 1rem; min-height: 1rem;">';

      let symbolsOnRow = '';
      row.forEach((symbolHolder) => {
        const symbolText = symbolHolder ? suit.symbol : '&nbsp;';
        const openDiv = '<div style="float: left; min-width: 1rem; width: 1rem; margin-left: 0.25rem; margin-right: 0.25rem">'
        symbolsOnRow = `${symbolsOnRow}${openDiv}${symbolText}</div>`;
      });

      cardRow = `${cardRow}${symbolsOnRow}</div>`;

      cardFace = `${cardFace}${cardRow}`;
    });

    return `${cardFace}</div>`;
  }
}

module.exports = HTMLDeckMaker;
