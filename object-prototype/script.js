'use strict';

var positions = [
    {
      title: 'Телепорт бытовой VZHIH-101',
      price: 10000,
      discount: 7,
      available: 3
    },
    {
      title: 'Ховерборд Mattel 2016',
      price: 9200,
      discount: 4,
      available: 14
    },
    {
      title: 'Меч световой FORCE (синий луч)',
      price: 57000,
      discount: 0,
      available: 1
    }
  ];

//Задание 1

  const itemPrototype = { // Прототип объекта
    hold(amount = 1) {
      if (this.available < amount) {
        return false;
      }
      this.available -= amount;
      this.holded += amount;
      return true;
    },
    toString() {
      return `${this.title} (остаток ${this.available}, в резерве ${this.holded})`;
    },
    unhold(amount = this.holded) {
      if (amount > this.holded) {
        return false;
      }
      this.holded -= amount;
      this.available += amount;
      return true;
    }

  };
  
  function createItem(title, amount) { // Конструктор объекта
    const item = Object.create(itemPrototype);
    item.title = title;
    item.available = amount;
    item.holded = 0;
    return item;
  }

  const items = [];
  for (let item of positions) {
    items.push(createItem(item.title, item.available));
  }
  
  items[0].hold(2);
  items[1].hold(8);
  items[1].hold(12);
  items[2].hold(1);
  
  for (let item of items) {
    console.log(`Товар ${item}`);
  }

items[0].unhold(1);
items[1].unhold();

for (let item of items) {
  console.log(`Товар ${item}`);
}

// Задание 2

for (let i = 0; i < positions.length; i++) {
  let backupDiscount = positions[i].discount;
  Object.defineProperty(positions[i], 'finalPrice', {
      get: function() { 
        return this.price - (this.price * this.discount * 0.01); 
      }, 
    set: function(newFinalPrice) {
      this.discount = (this.price - newFinalPrice) / this.price * 100;
      try {
        if (this.finalPrice > this.price || this.finalPrice === 0) {
          this.discount = backupDiscount;
          throw "Скидка не может быть вычислена";
        } 
      } catch (error) {
        console.log(`Ошибка: ${error}`);
      }
      
    }});
  }


console.log(positions[0].finalPrice); // 9300
positions[2].finalPrice = 285000;
console.log(positions[2].discount); // 50

//Задание 3

function isValidPosition(form = {}, requiredFields = []) {
  for (let i = 0; i < requiredFields.length; i++) {
    if (!(requiredFields[i] in form)) {
      return false;
    }
  }
  return true;
}

const requiredFields = [ 'title', 'price', 'discount' ];
let form1 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  price: 7800,
  discount: 0
};
let form2 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  discount: 10
}

if ( isValidPosition(form1, requiredFields) ) {
  console.log('Форма № 1 заполнена верно');
} else {
  console.log('В форме № 1 не заполнены необходимые поля');
}

if ( isValidPosition(form2, requiredFields) ) {
  console.log('Форма № 2 заполнена верно');
} else {
  console.log('В форме № 2 не заполнены необходимые поля');
}