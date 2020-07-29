/* global module */

/**
 * Creates card instance.
 */
class Card {

  /**
   *
   * @param {*}         face            Image to show on face of card
   * @param {String}    value           e.g. 2 - 10, Ace, Jack, Queen, King
   * @param {String}    suit            e.g. ♣, ♠, ♦, ♥
   */
  constructor(face, value, suit) {
    this.face = face;
    this.value = value;
    this.suit = suit;
  }

  /**
   * Returns card face for rendering purposes.
   */
  getFace() {
    return this.face;
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
