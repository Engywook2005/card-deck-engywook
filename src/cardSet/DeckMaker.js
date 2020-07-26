/* global module */
/* global require */

const Card = require('../card/Card');
const Constants = require('../utils/constants');
const document = require('html-element').document;

class DeckMaker {

  // @TODO setting for how to return cards - default html5? Or should html5/json/etc be handled at a higher level?
  /**
   * @param {Object} suit         Will eventually support images. For now limited to ascii symbol and color
   * @param {String} faceType     Default (and for now only option) html. To add: ASCII, JSON
   * @param {Object} range        Default is lower limit 2, upper limit 10. No provision currently for numbers above 10
   *                              (would need to supply own card design?
   * @param {Array} faceCards     Jacks, Queens, what have you
   * @param {Number} jokers       Number of jokers to include
   */
  constructor(suit,
              faceType = 'html',
              range = {
                min: 2,
                max: 10
              },
              faceCards = ['J','Q','K','A'],
              jokers = 0) {
    this.suit = suit;
    this.range = range;
    this.faceType = faceType;
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
      const fillNumCardFunc = this[`${this.faceType}FillNum`];
      const cardFace = fillNumCardFunc(this.suit, numberedCardTemplates[i]);
      const card = new Card(cardFace, i, this.suit);

      cards.push(card);
    }

    return cards;
  }

  /* Face card fillers */

  /**
   * Numbered card face as HTML.
   *
   * @param {Object} suit
   * @param {Object} template
   * @returns {HTMLDivElement}
   */
  htmlFillNum(suit, template) {
    const cardFace = document.createElement('div');
    cardFace.setAttribute(
      'style',
      {
        color: suit.color
      })
    ;

    template.forEach((row) => {
      const cardRow = document.createElement('div');

      row.forEach((symbolHolder) => {
        const suitSymbol = document.createElement('div');
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

  /**
   * Numbered card face as ASCII for stdout.
   *
   * @param {Object} suit
   * @param {Object} template
   * @returns {String}
   */
  asciiFillNum(suit, template) {
    const emptyRow =  '|                  |\n';
    let cardFace =    '/------------------\\\n';

    cardFace = `${cardFace}${emptyRow}`;

    template.forEach((row) => {
        cardFace = `${cardFace}|`;

        row.forEach((suitHolder) => {
          const threeSpace = '   ';
          const symbolSpace = ` ${suit.symbol} `;
          const nextSymbol = suitHolder ? symbolSpace: threeSpace;

          cardFace = `${cardFace}${threeSpace}`;
          cardFace = `${cardFace}${nextSymbol}`;
          cardFace = `${cardFace}${threeSpace}`;
        });

        cardFace = `${cardFace}|\n`;
        cardFace = `${cardFace}${emptyRow}`;
    });

    cardFace = `${cardFace}\\------------------/`;

    return cardFace;
  }

  /**
   * Numbered card face as data object.
   *
   * @param {Object} suit
   * @param {Object} template
   * @returns {Object}
   */
  jsonFillNum(suit, template) {
    const cardFace = {};

    return cardFace;
  }
}

module.exports = DeckMaker;
