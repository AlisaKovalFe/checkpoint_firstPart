const Participant = require('./participant')

module.exports = class Matcher extends Participant {
  constructor(participants, name, age, gender) {
    super(name, age, gender)
    this.participants = [...participants]
  }

  getFemales() {
    return this.participants.filter((el) => el.gender === 'female')
  }

  getMales() {
    return this.participants.filter((el) => el.gender === 'male')
  }

  generatePairs() {
    let arr = []
    for (let i = 0; i < this.participants.length; i = i + 2) {
      arr.push(this.participants.slice(i, i + 2))
    }
    return arr
  }
};

