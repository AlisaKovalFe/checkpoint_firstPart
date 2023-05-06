const Stuffing = require('./stuffing')
module.exports = class Doughnut extends Stuffing {
  constructor({ name = 'Пышка' }, stuffings) {
    super(name)
    this.stuffings = stuffings

  }

};
