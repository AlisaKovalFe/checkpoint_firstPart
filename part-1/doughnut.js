const Stuffing = require('./stuffing')
module.exports = class Doughnut extends Stuffing {
  constructor({ name: name }, baseWeight) {
    super(name)
    this.name = name
    this.baseWeight = baseWeight
  }
};
