const Stuffing = require('./stuffing')
module.exports = class Doughnut extends Stuffing {
  constructor({ name: name }, stuffings) {
    super(name)
    this.stuffings = stuffings

  }

};
