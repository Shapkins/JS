'use strict';

//Задание 1

function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}

const orders = [
  { price: 21, amount: 4 },
  { price: 50, amount: '17 штук' },
  { price: 7, amount: '1,5 килограмма' },
  { price: 2, amount: ' 2.7 метра ' },
  { price: 1, amount: 'семь единиц' }
];

function fixAmount(amount) {
  if (typeof amount !== 'number') {
    let result = amount.trim().split(' ')[0].replace(',', '.');
    return isNaN(parseFloat(result)) ? -1 : result;
  }
  return amount;
}

for (let order of orders) {
  let result = fixAmount(order.amount);
  console.log(`Заказ на сумму: ${result * order.price} Q`);
}

//Задание 2
let combination = '';

function handleKey(char) {
  combination += char.toLowerCase();
  if (combination.indexOf('r2d2') !== -1) {
    showSpecialPrice();
  }
}

var keys = ['2', '4', 'R', '2', 'd', '2'];
for (let key of keys) {
  handleKey(key);
}

//Задание 3

const data = [
  '12,Телепорт бытовой VZHIH-101 ,17,10000',
  '77, Меч световой FORCE (синий луч), 2,57000'
];

function parseData(dataName = [], dataContent = [], separator = ',') {
  let fullData = [];
  for (let content of dataContent) {
    content = content.split(separator);
    let data = {};
    for (let i = 0; i < dataName.length; i++){
      data[dataName[i]] = content[i].trim();
    }
    fullData.push(data);
  }
  return fullData;
}

let items = parseData(['id', 'name', 'amount', 'price'], data);
console.log(items);