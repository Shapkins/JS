'use strict';

//Задание 1
let totalTax = 0;

function salesTax(price = 0) {
  let tax = 0.73;
  totalTax =+ tax * price;
  return console.log(`Налог с продаж (${tax*100} %), к оплате: ${totalTax} Q`);
}

salesTax(1200);
salesTax(1500);
salesTax(2100);

//Задание 2
let paper = 30;

function boxPack(length = 0, width = 0, height = 0) {
  let space = 2 * (length * width + length * height + width * height);
  if (space < paper) {
    paper -= space;
    console.log(`Заказ (${length}/${width}/${height} м) упакован, осталось упаковочной бумаги ${paper} м2`);
    return true;
  } else {
    console.log(`Заказ (${length}/${width}/${height} м) не упакован, осталось упаковочной бумаги ${paper} м2`);
    return false;
  }
}

boxPack (1, 0.2, 0.7);
boxPack (100, 30, 7);

//Задание 3
let teleports = [7, 2, 1, 4, 8];
let counters = [];


function teleportUpdate(number = 0) {
  return function() {
    if (teleports[number - 1] > 1) {
      teleports[number - 1] -= 1;
      return console.log(`Телепорт ${number} использован, заряд — ${teleports[number - 1]} единиц`);
    } else if (teleports[number - 1] === 1) {
      teleports[number - 1] -= 1;
      return console.log(`Телепорт ${number} использован, заряд — 0 единиц, требуется перезарядка!`);
    } else {
      return console.log(`Телепорт ${number} недоступен, перезаряжается`);
    }
  }
}


for (let i = 0; i < teleports.length; i++ ) {
  counters.push(teleportUpdate(i + 1));
}

counters[0]();
counters[2]();