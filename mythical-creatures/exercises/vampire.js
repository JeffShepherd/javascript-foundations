//
class Vampire {
  constructor (name, petName) {
    this.name = name;
    this.pet = petName || 'bat';
    this.thirsty = true;
    this.ouncesDrank = 0;
  }
  drink() {
    if (this.ouncesDrank < 50) {
      this.thirsty = false;
      this.ouncesDrank += 10;
    } else {
      return "I'm too full to drink anymore!";
    }

  }
}




module.exports = Vampire;
