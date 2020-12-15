//
class Magician {
  constructor(magicianObject) {
    this.name = 'The Great ' + magicianObject.name;
    this.assistant = magicianObject.assistant;
    this.clothing = magicianObject.clothing || 'top hat';
    this.favoriteAccessory = magicianObject.clothing || 'top hat';
    this.confidencePercentage = 10;
  }
  performIncantation(spell) {
    return spell.toUpperCase() + "!";
  }
  performTrick() {
    if (this.clothing === 'top hat') {
      this.confidencePercentage += 10;
      return 'PULL RABBIT FROM TOP HAT';
  } else {
      this.confidencePercentage += 10;
      return 'PULL DOVE FROM SLEEVE'
  }
  }
  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant === true) {
      return 'WOW! The magician totally just sawed that person in half!'
    } else {
      return 'Oh no, this trick is not ready!'
    }
  }
}

module.exports = Magician;
