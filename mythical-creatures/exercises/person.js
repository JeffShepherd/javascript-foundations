
class Person {
  constructor(name, relieved) {
    this.name = name;
    this.mood = relieved || 'frightened';
  }
}

module.exports = Person;
