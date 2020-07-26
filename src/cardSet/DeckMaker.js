/* global module */
/* global require */

const Card = require('../card/Card');
const Constants = require('../utils/constants');

class DeckMaker {

  /**
   * @param {Object} suit         Will eventually support images. For now limited to ascii symbol and color
   * @param {Function} renderFunc Called when card is rendered
   * @param {Object} range        Default is lower limit 2, upper limit 10. No provision currently for numbers above 10
   *                              (would need to supply own template)
   * @param {Array} faceCards     Jacks, Queens, what have you
   * @param {Number} jokers       Number of jokers to include
   */
  constructor(suit,
              renderFunc,
              range = {
                min: 2,
                max: 10
              },
              faceCards = ['J','Q','K','A'],
              jokers = 0) {
    this.suit = suit;
    this.renderFunc = renderFunc;
    this.range = range;
    this.faceCards = faceCards;
    this.jokers = jokers;
  }

  /**
   * Constructs set of numbered cards for suit supplied to constructor.
   */
  fillSuit() {
    const numberedCardTemplates = Constants.numCards;
    const cards = [];

    for(let i = this.range.min; i <= this.range.max; i++) {
      const cardFace = this.fillNumberedCard(this.suit, numberedCardTemplates[i]);
      const card = new Card(cardFace, i, this.suit, this.renderFunc);

      cards.push(card);
    }

    return cards;
  }

  /* Face card filler

  /**
   * Numbered card face for JSON. Overridden in HTMLDeckMaker and ASCIIDeckMaker.
   *
   * @param {Object} suit
   * @param {Object} template
   * @returns {Object}
   */
  fillNumberedCard(suit, template) {
    const cardFace = {};

    template.forEach((row) => {
      for(let i = 0; i < row.length; i++) {
        if(row[i]) {
          row.splice(i, 1, suit.symbol);
        }
      }
    });

    return cardFace;
  }
}

module.exports = DeckMaker;
