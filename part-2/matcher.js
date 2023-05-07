module.exports = class Matcher {
  constructor(participants) {
    this.participants = participants
    this.likes = new Map()
  }

  getFemales() {
    return this.participants.filter((el) => el.gender === 'female')
  }

  getMales() {
    return this.participants.filter((el) => el.gender === 'male')
  }

  generatePairs() {
    let femails = this.getFemales()
    let mails = this.getMales()
    let pairs = []

    for (let i = 0; i < femails.length; i++) {
      for (let j = 0; j < mails.length; j++) {
        pairs.push([femails[i], mails[i]])
      }
    }
    return pairs

    // for (let woman of femails) {
    //   for (let man of mails) {
    //     pairs.push([woman, man])
    //   }
    //   // mails.forEach((el) => pairs.push())
    // }

    // for (let i = 0; i < femails.length; i++) {
    //   mails.forEach((el) => pairs.push([femails[i], el]))
    // }

    // return this.participants
    // .map((p1, i) => this.participants
    //   .filter((p2, j) => p1.gender !== p2.gender && i < j)
    //   .map((p2) => [p1, p2])
    // )
    //  .flat()

  }

  addLike(a, b) {
    if (!this.likes.has(a)) {
      this.likes.set(a, [])
    }
    this.likes
      .get(a)
      .push(b)
  }

  getLikes(a) {
    return this.likes.get(a)
  }

  whoLikes(a) {
    return Array.from(this.likes.entries())
      .map(([key, value]) => {
        if (value.includes(a)) {
          return key
        }
        return null
      })
      .filter((v) => v !== null)
  }
};

