class Centaur {
  constructor(centaurObject) {
    this.name = centaurObject.name;
    this.breed = centaurObject.type;
    this.cranky = false;
    this.standing = true;
    this.counter = 0;
    this.layingDown = false;
  }
  shootBow() {
    if (this.cranky === true || this.layingDown === true) {
      return 'NO!'
    } else if(this.counter < 2) {
      this.counter++;
    } else {
      this.cranky = true;
    }
    return 'Twang!!!'
  }
  run() {
    if (this.cranky === true || this.layingDown === true) {
      return 'NO!'
    } else if(this.counter < 2) {
      this.counter++;
    } else {
      this.cranky = true;
    }
    return 'Clop clop clop clop!!!'
  }
  sleep() {
    if (this.standing === true) {
      return 'NO!'
    } else {
      this.cranky = false;
      return 'ZZZZ'
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if(this.layingDown === true) {
      return 'Not while I\'m laying down!'
    } else {
      this.cranky = false;
    }

  }
}

module.exports = Centaur;
