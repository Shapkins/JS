'use strict';

// Задание 1

let codes = [
  'Madam, I’m Adam',
  'A man, a plan, a canal. Panama',
  '----<-------Eve------->-----',
  '[__777-x-44-x-777__]',
  '1234564321',
  'Olson in Oslo'
];

function checkCoupon(code = '') {
  code = code.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  if (code.length > 9) {
    for (let i = 0; i < code.length / 2; i++) {
      if (code[i] !== code[code.length - i - 1]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

for (let code of codes) {
  let result = checkCoupon(code) ? 'подходит' : 'не подходит';
  console.log(`Код «${code}» ${result}`);
}

// Задание 2

const texts = [
  '<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
  '<EM>Световой меч</EM> в <strong>каждый</strong> дом!'
];

function stripTags(code = '') {
  let clearCode =  code.replace(/<\/?\w+>/g, '');
  return clearCode;
}

for (let text of texts) {
  console.log(stripTags(text));
}

// Задание 3

const fields = [
  { name: 'name', rule: /^[a-z ]{5,}$/i },
  { name: 'email', rule: 'email' },
  { name: 'phone', rule: 'phone' },
];

const forms = [
  { name: 'Ivan Ivanov', email: 'ivan@test.co', phone: '+79212753690' },
  { name: 'III', email: 'ivan@test', phone: '11111' }
];

function validate(form = {}, fields = []) {
  if (form.email.match(/\w{1,}@{1}\w{1,}\.{1}\w{1,}/) === null) {
    return false;
  }
  if (form.phone.match(/\+{1}7{1}[0-9]{10}/) === null) {
    return false;
  }
  if (form.name.match(fields.rule) === null) {
    return false;
  }
  return true;
}

for (let form of forms) {
  console.log(form);
  if (validate(form, fields)) {
    console.log('Ошибок нет');
  } else {
    console.log('Форма заполнена неверно');
  }
}

