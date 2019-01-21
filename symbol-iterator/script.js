'use strict';

//Задание 1

class BarcodeGenerator {
  constructor (size = 1) {
    this.size = size;
  }

  create() {
    this.ownPrefix = Symbol.for(generator[this.prefix]);
    let code = '';
    if (generator[this.prefix] !== undefined) {
      code = Symbol.keyFor(this.ownPrefix) + '-';
    }
    for (let i = 0; i < this.size; i++) {
      code += Math.round(Math.random()*9);
    }
    return code;
  }
}

const generator = new BarcodeGenerator(4);

generator[BarcodeGenerator.prefix] = 'AA';
console.log(generator.create());

generator[BarcodeGenerator.prefix] = 'XX';
console.log(generator.create());
console.log(generator.create());
console.log(generator.create());

delete generator[BarcodeGenerator.prefix];
console.log(generator.create());

//Задание 2

class HexRange {
  constructor(from = 0, to = 0) {
    let hexes = [];
    for(let i = from; i <= to; i++) {
      let hex = ((i - i % 16) / 16).toString(16) + (i % 16).toString(16);
      hexes[hexes.length] = hex;
    }
    return hexes;
  }
}

let queue = new HexRange(247, 253);
console.log(...queue);

//Задание 3

class DateRange {
  constructor(from = {} ,to = {}) {
    let dates = [];
    let date = new Date(from);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    while (date < to) {
      if (date.getDay() > 0 && date.getDay() < 6) {
        dates[dates.length] = new Date(date);
      }
      let tmpDate = new Date(date.setDate(date.getDate() + 1));
      date = tmpDate;
    }
    return dates;
  }
}

const from = new Date(2017, 2, 13, 23, 59);
const to = new Date(2017, 2, 21, 0, 1);
let range = new DateRange(from, to);

for (let day of range) {
  console.log(day.toLocaleDateString('ru-Ru'));
}