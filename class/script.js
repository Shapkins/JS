'use strict';

function rand(min, max) {
  return Math.ceil((max - min + 1) * Math.random()) + min - 1;
}

function generateId() {
  return Array(4).fill(1).map(value => rand(1000, 9999)).join('-');
}

const pointsInfo = [
  { title: 'Темная сторона Луны', coords: [500, 200, 97] },
  { title: 'Седьмое кольцо Юпитера', coords: [934, -491, 712] },
  { title: 'Саратов', coords: [30, 91, 77] }
];

//Задание 1

class OrdersTeleportationPoint {
  constructor (title = '', x = 0, y = 0, z = 0) {
    this.title = title;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  getDistance(destinationX = 0, destinationY = 0, destinationZ = 0) {
    return Math.sqrt((this.x - destinationX) * (this.x - destinationX) + (this.y - destinationY) * (this.y - destinationY) + (this.z - destinationZ) * (this.z - destinationZ));
  }
}

const point = new OrdersTeleportationPoint('Темная сторона Луны', 500, 200, 97);
let distance = point.getDistance(100, -100, 33);
console.log(`Расстояние до пункта «${point.title}» составит ${distance.toFixed(0)} единиц`);

//Задание 2

class OrdersTeleportationPointLocator {
  constructor (points = []) {
    this.points = points;
    if (!Array.isArray(points)) {
    throw error;
  }
  }
  
  getClosest(x = 0, y = 0, z = 0) {
    let distance = 10000;
    let location = {};
    for (let point of this.points) {
      if (point.getDistance(x, y, z) < distance) {
        distance = point.getDistance(x, y, z);
        location = point;
      }
    }
    return location;
  }
}

try {
  //const points = 1;
  const points = pointsInfo.map(point => new OrdersTeleportationPoint(point.title,...point.coords));
  const locator = new OrdersTeleportationPointLocator(points);

  const closestPoint = locator.getClosest(333, 294, 77);
  console.log(`Ближайший пункт телепортации заказов «${closestPoint.title}»`);
  } catch (error) {
  console.error('Ошибка');
  }
//Задание 3

function defineDiscount(sum) {
  if (sum < 3000) {
    return 0;
  } else if (sum < 5000) {
    return 3;
  } else if (sum < 10000) {
    return 5;
  } else {
    return 7;
  }
}

class LoyaltyCard {
  constructor(name = '', sum = 0) {
    this.owner = name;
    Object.defineProperty(this, "balance", {
      value: sum,
      writable: false,
      configurable: true
    });
    Object.defineProperty(this, "id", {
      value: generateId(),
      writable: false
    });
    Object.defineProperty(this, "discount", {
      value: defineDiscount(this.balance),
      writable: false,
      configurable: true
    });
  }

  show() {
    console.log(`Карта ${this.id}:\n\tВладелец: ${this.owner}\n\tБаланс: ${this.balance} Q\n\tТекущая скидка: ${this.discount} %\n\tЗаказы:\n\t\t#1 на сумму ${this.sum} Q\n\t\t#2 на сумму ${this.balance - this.sum} Q`);
  }

  append(sum) {
    this.sum = sum;
      Object.defineProperty(this, "balance", {
      value: this.balance + sum
    });
    Object.defineProperty(this, "discount", {
      value: defineDiscount(this.balance)
    });
  }

  getFinalSum(newsum) {
    return newsum * (100 - this.discount) / 100;
  }
}

const card = new LoyaltyCard('Иванов Иван', 6300);

let newOrderSum = 7000;
let finalSum = card.getFinalSum(newOrderSum);
console.log(`Итоговая сумма для заказа на ${newOrderSum} Q по карте
  составит ${finalSum} Q. Скидка ${card.discount} %.`);

card.append(newOrderSum);
console.log(`Баланс карты после покупки ${card.balance} Q.`);
card.show();