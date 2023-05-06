module.exports = class Matcher {
  constructor(participants) {
    this.participants = participants
  }

  getFemales() {
    return this.participants.filter((el) => el.gender === 'female')
  }

  getMales() {
    return this.participants.filter((el) => el.gender === 'male')
  }

  generatePairs() {
    // let arr = []
    // for (let i = 0; i < this.participants.length; i = i + 2) {
    //   arr.push(this.participants.slice(i, i + 2))
    // }
    // return arr

    // let femails = this.getFemales()
    // let mails = this.getMales()
    // let pairs = []

    // for (let i = 0; i < femails.length; i++) {
    //   for (let j = 0; i < mails.length; j++) {
    //     pairs.push([femails[i], mails[j]])
    //   }
    //   // mails.forEach((el) => pairs.push())
    // }
    // return pairs

  }
};

