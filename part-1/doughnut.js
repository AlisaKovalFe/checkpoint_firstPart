module.exports = class Doughnut {
  constructor({ name = 'Пышка' }, stuffings = []) {
    this.name = name
    this.stuffings = stuffings
    this.baseWeight = 60 // почему в конструктор это не передаем? потому что у нас есть только дефолтный вариант?
  }

  get weight() {
    return this.stuffings.reduce((acc, el) => acc + el.weight, this.baseWeight)
  }

};
