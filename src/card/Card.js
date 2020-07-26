/* global module */

/**
 * Creates card instance.
 */
class Card {

  /**
   *
   * @param {*}         face            Image to show on face of card
   * @param {String}    value           2 - 10, Ace, Jack, Queen, King
   * @param {String}    suit            e.g. ♣, ♠, ♦, ♥
   * @param {Function}  renderFunction  Called when card is rendered.
   */
  constructor(face, value, suit, renderFunction) {
    this.face = face;
    this.value = value;
    this.suit = suit;
    this.renderFunction = renderFunction;
  }

  /**
   * Display card face.
   * @param {HTMLElement} parentElement   When using an html card face.
   */
  render() {
    this.renderFunction(this.face);
  }

  /**
   * @returns {String}
   */
  getValue() {
    return this.value;
  }

  /**
   * @returns {String}
   */
  getSuit() {
    return this.suit;
  }
}

module.exports = Card;
