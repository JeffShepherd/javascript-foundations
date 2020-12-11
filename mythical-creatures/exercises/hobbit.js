//
class Hobbit {
  constructor(hobbitObject) {
    this.name = hobbitObject.name;
    this.age = 0;
    this.adult = this.age > 32 || false;
  }
  celebrateBirthday() {
    this.age +=1;
  }
}

module.exports = Hobbit;
