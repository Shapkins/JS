'use strict';
//задание 1
var itemOrdered;
var itemAvailable;
itemOrdered = 1500;
//itemOrdered = 2000;
//itemOrdered = 2500;
itemAvailable = 2000;

if (itemAvailable > itemOrdered) {
  console.log('Заказ оформлен\n');
} else if (itemOrdered > itemAvailable) {
  console.log('На складе нет такого количества товаров\n');
} else {
  console.log('Вы забираете весь товар c нашего склада\n');
}

//задание 2
var itemDelivery;
var areaDelivery;
areaDelivery = 'Луна';
//areaDelivery = 'Крабовидная туманность';
//areaDelivery = 'Галактика Туманность Андромеды';
//areaDelivery = 'Туманность Ориона';
//areaDelivery = 'Звезда смерти';
//areaDelivery = 'Куда-нибудь';

switch (areaDelivery) {
  case 'Луна' :
    itemDelivery = '150 Q';
  break;

  case 'Крабовидная туманность':
    itemDelivery = '250 Q';
  break;
  
  case 'Галактика Туманность Андромеды':
    itemDelivery = '550 Q';
  break;
  
  case 'Туманность Ориона':
    itemDelivery = '600 Q';
  break;
  
  case 'Звезда смерти':
    itemDelivery = 'договорная цена';
  break;
}

if (itemDelivery === undefined) {
  console.log('В ваш квадрант доставка не осуществляется\n');
} else {
  console.log(`Стоимость доставки для области ${areaDelivery}: ${itemDelivery}\n`);
}

//задание 3
var itemPrice;
itemPrice = 123;
//itemPrice = 'сто двадцать три';

try {
  if (typeof (itemPrice) === 'string') {
    throw `Вы допустили ошибку: ${itemPrice} не является числом\n`;
  }
  console.log('Цена товара введена корректно\n');
} catch (error) {
  console.log(error);
}

//задание 4
var customerPlanet;
var customerAge;
customerAge = 12;
//customerAge = 140;
customerPlanet = 'Земля';
//customerPlanet = 'Юпитер';
//customerPlanet = 'Нептун';

if (customerPlanet === 'Земля') {
  if (customerAge < 18) {
    console.log('Вы не достигли совершеннолетия\n');
  } else {
    console.log('Приятных покупок\n');
  }
} else if (customerPlanet === 'Юпитер') {
    if (customerAge < 120) {
      console.log('Сожалеем. Вернитесь на 120-й день рождения!\n');
    } else {
      console.log('Чистого неба и удачных покупок!\n');
    }
  } else {
  console.log('Спасибо, что пользуетесь услугами нашего магазина!\n')
  }