'use strict';

let positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    producer: {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
      lot: 3
    },
    price: 10000
  },
  {
    title: 'Ховерборд Mattel 2016',
    producer: {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
      lot: 14
    },
    price: 9200
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    producer: {
      name: 'Тульский оружейный комбинат',
      deferPeriod: 5,
      lot: 1
    },
    price: 57000
  }
];

//Задание 1

function lotCalculator(item = {}, amount = 0) {
  let lots = Math.ceil( amount / item.producer.lot );
  let total = lots * item.producer.lot * item.price;
  let calc = {lots, total};
  return calc;
}

let item = positions[1];
let amount = 15;
//let item = positions[0];
//let amount = 32;
//let item = positions[2];
//let amount = 47;
let calc = lotCalculator(item, amount);

console.log(`${item.title} ${amount} штук: заказать партий ${calc.lots}, стоимость ${calc.total} Q`);
//Задание 2

const deferedPayments = [];

let dischargeDate = new Date();

function deferPay(producer = {}, amount = 0, dischargeDate = {}) {
  const paymentDate = new Date(dischargeDate);
  paymentDate.setDate(dischargeDate.getDate() + producer.deferPeriod);
  let Payment = {producer, amount, paymentDate};
  deferedPayments.push(Payment);
}

let producer = positions[1].producer;

deferPay(positions[1].producer, 7200, new Date(2030, 4 - 1, 10));
deferPay(positions[2].producer, 5600, new Date(2032, 7 - 1, 8));
deferPay(positions[0].producer, 3900, new Date(2031, 11 - 1, 5));

for (let i = 0; i < deferedPayments.length; i++) {
  console.log(`${deferedPayments[i].paymentDate.toLocaleDateString('ru-Ru')}: ${deferedPayments[i].producer.name}, сумма ${deferedPayments[i].amount}`);
}

//Задание 3

function loadCurrencyJSON() {
  return `{"AUD":44.95,"AZN":33.73,"GBP":73.42,"AMD":0.12,"BYN":30.96,"BGN":32.01,  "BRL": 18.8, "HUF": 0.2, "DKK": 8.42, "USD": 58.85, "EUR": 62.68, "INR": 0.88, "KZT": 0.18,    "CAD": 44.74, "KGS": 0.85, "CNY": 8.55, "MDL": 2.94, "NOK": 7.02, "PLN": 14.55, "RON": 13.92,      "ZZZ": 79.91, "SGD": 41.36, "TJS": 7.43, "TRY": 15.97, "TMT": 16.84, "UZS": 0.02, "UAH": 2.16,        "CZK": 2.32, "SEK": 6.6, "CHF": 58.69, "ZAR": 4.4, "KRW": 0.05, "JPY": 0.52} `;
}

function convertCurrency(amount = 0, from = "", to = "") {
  let currency = loadCurrencyJSON();
  try {
    currency = JSON.parse(currency);
    let price = Math.round(amount * currency[from] / currency[to] * 100) / 100;
    return price;
  } catch (e) {
    console.error(e.name, e.message);
  }
}

let amountCurrency = 7000;
let from = 'ZZZ';
let to = 'USD';
//let amountCurrency = 790;
//let from = 'EUR';
//let to = 'ZZZ';
//let amountCurrency = 450;
//let from = 'BYN';
//let to = 'NOK';
let convert = convertCurrency(amountCurrency, from, to);

console.log(`Сумма ${convert} ${to}`)