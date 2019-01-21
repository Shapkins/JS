'use strict';

var positions = [
  'Телепорт бытовой VZHIH-101',
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)'
];

var prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

var hitName = positions[2], hitPrice = prices[2];

//Задание 1

let hit = {};
hit['name'] = hitName;
hit['price'] = hitPrice;

console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.price} Q`);

//Задание 2

let items = [];

for (var i = 0; i < positions.length; i++) {
  let item = {};
  item['name'] = positions[i];
  item['price'] = prices[i];
  items.push(item);
}

console.log(`Купите ${items[4].name} по цене ${items[4].price} Q`);

//Задание 3

function showDiscount(item = {}, amount = 0) {
  let discount = 0;
  switch (true) {

    case amount > 0 && amount < 10:
      discount = 5;
      break;

    case amount >= 10 && amount < 50:
      discount = 7;
      break;

    case amount >= 50 && amount < 100:
      discount = 10;
      break;

    case amount >= 100:
      discount = 15;
      break;
  }

  let discountPrice = Math.ceil( amount * item.price * discount / 100 );
  let totalPrice = Math.ceil( amount * item.price * (1 - discount / 100 ));

  console.log(`${item.name} — стоимость партии из ${amount} штук ${totalPrice} Q (скидка ${discount} %), ваша выгода ${discountPrice} Q!`);
}

showDiscount(items[0], 12);
showDiscount(items[3], 97);

//Задание 4

items[3].amount = 4;

function updateAmount(item = {}, consume = 1) {
  if ('amount' in item) {
    if (item.amount === 0 || consume > item.amount) {
      return console.log(`${item.name} закончился на складе.`);
    } else if (consume < item.amount) {
      item.amount -= consume;
      console.log(`${item.name} — остаток ${item.amount} шт.`);
    } else if (consume === item.amount) {
      item.amount -= consume;
      console.log(`Это был последний ${item.name}, вам повезло!.`);
    }
  }
}

updateAmount(items[1], 17);
updateAmount(items[3], 3);
updateAmount(items[3]);