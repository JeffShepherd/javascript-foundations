
class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if(this.riddles.length > 3) {
      this.riddles.splice(0, 1);
    }
  }
  attemptAnswer(answer) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (answer === this.riddles[i].answer) {
        this.riddles.splice(i, 1);
        if(this.riddles.length > 0) {
          return 'That wasn\'t that hard, I bet you don\'t get the next one'
        } else {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
        }

      }
    }
    this.heroesEaten += 1;
  }
}



module.exports = Sphinx;
