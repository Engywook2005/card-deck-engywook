/* global module */

class NumberedCards {

  // @TODO setting for how to return cards - default html5? Or should html5/json/etc be handled at a higher level?
  /**
   * @param {Object} suit     Will eventually support images. For now limited to ascii symbol and color
   * @param {Object} range    Default is lower limit 2, upper limit 10. No provision currently for numbers above 10
   *                          (would need to supply own card design?
   */
  constructor(suit, range = {
    min: 2,
    max: 10
  }) {
    this.suit = suit;
    this.range = range;
  }

  getNumberedDeck() {
    const numCards = {
      10: [
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]
      ],
      9: [
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1]
      ],
      8: [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1]
      ],
      7: [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ],
      6: [
        [0, 0, 0],
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
        [0, 0, 0]
      ],
      5: [
        [0, 0, 0],
        [1, 0, 1],
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
        [1, 0, 1],
        [0, 0, 0]
      ],
      4: [
        [0, 0, 0],
        [1, 0, 1],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [1, 0, 1],
        [0, 0, 0]
      ],
      3: [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ],
      2: [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ],
    }
  }
}

module.exports = NumberedCards;
