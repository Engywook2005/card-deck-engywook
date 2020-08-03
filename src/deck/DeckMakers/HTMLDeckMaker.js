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

    let cardFace = `<div style = "width: 7.5rem; height: 10.5rem; color: ${suit.color}; position: relative; border-color: #000099; border-width: 1px; border-style: solid; border-radius: 5px;">`

    let cardNumbers = `<div style = "position: absolute; top: 1rem; left: 1rem; padding-left: 0.5rem; clear: left; width: 4.5rem; border-color: ${suit.color} border-width: 1px; border-style: solid;">`

    template.forEach((row) => {
      let cardRow = '<div style="clear: left; height: 1rem; min-height: 1rem;">';

      let symbolsOnRow = '';
      row.forEach((symbolHolder) => {
        const symbolText = symbolHolder ? suit.symbol : '&nbsp;';
        const openDiv = '<div style="float: left; min-width: 1rem; width: 1rem; margin-left: 0.25rem; margin-right: 0.25rem">'
        symbolsOnRow = `${symbolsOnRow}${openDiv}${symbolText}</div>`;
      });

      cardRow = `${cardRow}${symbolsOnRow}</div>`;

      cardNumbers = `${cardNumbers}${cardRow}`;
    });

    return `${cardFace}${cardNumbers}</div></div>`;
  }
}

module.exports = HTMLDeckMaker;
