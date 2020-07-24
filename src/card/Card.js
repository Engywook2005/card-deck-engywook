/* global module */

/**
 * Creates card instance.
 */
class Card {

  /**
   *
   * @param {*} face          Image to show on face of card
   * @param {String} value    2 - 10, Ace, Jack, Queen, King
   * @param {String} suit     e.g. ♣, ♠, ♦, ♥
   */
  constructor(face, value, suit) {
    this.face = face;
    this.value = value;
    this.suit = suit;
  }

  /**
   * Display card face.
   * @param {HTMLElement} parentElement   When using an html card face.
   */
  render(parentElement = null) {

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

module.export = Card;
