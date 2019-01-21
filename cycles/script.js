'use strict';
var positions = [
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)',
  'Машина времени DeLorean',
  'Репликатор домашний STAR-94',
  'Лингвенсор 000-17',
  'Целеуказатель электронный WAY-Y'
];

//Задание 1
var positionsQuantity;
positionsQuantity = positions.length;
console.log('Список наименований\n');

for (var i = 0; i < positionsQuantity; i++) {
  console.log(`${i + 1} '${positions[i]}'`);
}

//Задание 2
positions.push('Экзоскелет Trooper-111', 'Нейроинтерфейс игровой SEGUN', 'Семена дерева Эйва');
console.log('\nОкончательный список наименований\n');

for (var i = 0; i < positions.length; i++) {
  console.log(`${i + 1} '${positions[i]}'`);
}

//Задание 3
var positionsIndex = positions.indexOf('Машина времени DeLorean');
var positionsPriority = positions.splice(positionsIndex, 1);
positions.unshift(positionsPriority[0]);


console.log('\nПринять в первую очередь\n');
for (var i = 0; i < 3; i++) {
  console.log(`${i + 1} '${positions[i]}'`);
}

//Задание 4
var [firstItem, secondItem, thirdItem, fourthItem, fifthItem, ...otherItems] = positions;
console.log('\nВ магазине\n');
console.log(firstItem);
console.log(secondItem);
console.log(thirdItem);
console.log(fourthItem);
console.log(fifthItem);

console.log('\nОстальные товары\n');
console.log(otherItems.join(', '));