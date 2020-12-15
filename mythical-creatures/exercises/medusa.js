var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(personObject) {
    var person;
    if (this.statues.length < 3) {
    this.statues.push(new Statue(personObject.name));
  } else {
    person = new Person(this.statues[0].name, 'relieved');
    this.statues.shift();
    this.statues.push(new Statue(personObject.name));
    return person;
  }
    }
  }





module.exports = Medusa;
