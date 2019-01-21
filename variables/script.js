//задание 1-3
'use strict';
var itemName;
var itemPrice;
var itemQuantity;
var itemDiscount;
var itemTotalPrice;
itemName = 'Телепорт бытовой VZHIH-101';
itemPrice = 10000;
itemQuantity = 2;
itemDiscount = 0.1;
console.log(`В наличии имеется: «${itemName}»\n`);
console.log(`Стоимость товара ${itemPrice} Q\n`);
itemTotalPrice = itemQuantity * itemPrice * (1 - itemDiscount);
console.log(`Цена покупки составит ${itemTotalPrice} Q\n`);

//задание 4
var firmBudget;
var restBudget;
var itemAmount;
firmBudget = 52334224;
itemPrice = 6500;
restBudget = firmBudget % itemPrice;
itemAmount = (firmBudget - restBudget) / itemPrice;
console.log(`Мы можем закупить ${itemAmount} единиц товара, после закупки на счету останется ${restBudget} Q\n`);