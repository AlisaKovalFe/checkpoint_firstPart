const Client = require('./client');

module.exports = class Salesman extends Client {
  constructor(firstName, lastName, middleName, phone, hireDate) {
    super(firstName, lastName, middleName, phone)
    this.hireDate = hireDate
  }

  getFio() {
    super.getFio()
  }
};
