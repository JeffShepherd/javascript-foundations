//
class Hobbit {
  constructor(hobbitObject) {
    this.name = hobbitObject.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
  }
  celebrateBirthday() {
    if (this.age < 32){
      this.age++;
    } else if (this.age > 99){
      this.age++;
      this.old = true;
    }else {
      this.age++;
      this.adult = true;
    }
  }
  getRing() {
    if (this.name === 'Frodo') {
      this.hasRing = true;
      return 'Here is the ring!'
    } else {
      return 'You can\'t have it!'
    }
  }
}


module.exports = Hobbit;
