'use strict';

// Задание 1

const clients = [{
  name: 'Филип Фрай',
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [ 11700, 1980, 450, 5500 ]
}, {
  name: 'Бендер Сгибатель Родригес',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [ 440, 226, 7650, 2990, 70 ]
}, {
  name: 'Доктор Джон Зоидберг',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [ 720 ]
}];

clients.findByName = function (name = '') {
  let element = clients.find(function (clients) {
    return clients.name === name;
  });
  return element;
}

const clientOne = clients.findByName('Доктор Джон Зоидберг');
console.log(clientOne.email); // zoidberg-md@list.un

const clientTwo = clients.findByName('Люрр');
console.log(typeof clientTwo); // undefined

// Задание 2

function compareByTotalSumm (left, right) {
  let leftsum = left.orders.reduce(function (sum, element) {
    return sum + element;
  }, 0);
  let rightsum = right.orders.reduce(function (sum, element) {
    return sum + element;
  }, 0);
  if (leftsum > rightsum) {
    return -1;
  } else if (leftsum < rightsum) {
    return 1;
  } else {
    return 0;
  }
}

clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));

  //Задание 3

function sendMail(email) {
  console.log(`Письмо отправлено на адрес ${email}`);
}

function getSubscribedEmails(list = []) {
  let subscribers = list.filter(people => people.isSubscribed);
  let newsubscribers = subscribers.map(function(subscriber) {
    return subscriber.email;
  });
  return newsubscribers;
}

getSubscribedEmails(clients).forEach(sendMail);