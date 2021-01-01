//

const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(starkObject) {
    if (starkObject) {
      this.name = starkObject.name;
      this.location = starkObject.area || 'Winterfell';
      this.safe = false;
    }
  }
  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers';
    } else {
      return 'Winter is Coming';
    }
  }
  callDirewolf(name, home) {
    var direwolf = new Direwolf(name, home)
    direwolf.home = this.location;
    direwolf.protect(this);
    return direwolf;
  }
}


  module.exports = Stark;
