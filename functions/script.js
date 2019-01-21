'use strict';

function booking(itemCost = 0, warrantyLength = 0, titleEngraving = '', needDelivery = false, areaDelivery = '') {
  
  function warranty(warrantyLength = 0) {
    var warrantyCost = 250 * warrantyLength;
    return warrantyCost;
  }

  function engraving(title = '') {
    if (title !== '') {
      var words = title.split(' ');
      var engravingCost = 11 * words.length;
    } else {
      var engravingCost = 0;
    }
    return engravingCost;
  }

  function delivery(need = true, space = '') {
    var itemDelivery = 0;
    if (need) {
      switch (space) {
        case 'Луна':
          itemDelivery = 150;
          break;

        case 'Крабовидная туманность':
          itemDelivery = 250;
          break;

        case 'Галактика Туманность Андромеды':
          itemDelivery = 550;
          break;

        case 'Туманность Ориона':
          itemDelivery = 600;
          break;

        default:
          itemDelivery = NaN;
      }
    } else {
      itemDelivery = 0;
    }
    return itemDelivery;
  }

  var totalCost = itemCost + warranty(warrantyLength) + engraving(titleEngraving) + delivery(needDelivery, areaDelivery);
  var costs = [totalCost, warranty(warrantyLength), engraving(titleEngraving), delivery(needDelivery, areaDelivery)];
  return costs;
}

var string = "строку с надписью для гравировки";
var need = true;
//var need = false;
var space = 'Туманность Ориона';
//var space = 'Куда-нибудь';
var itemCost = 1500;
var length = 5;
//var length = 0;



console.log(`Общая стоимость заказа: ${booking(itemCost, length, string, need, space)[0]} Q.`);
console.log(`Из них ${booking(itemCost, length, string, need, space)[1]} Q за гарантийное обслуживание на ${length} год / года.`);
console.log(`Гравировка на сумму ${booking(itemCost, length, string, need, space)[2]} Q.`);
console.log(`Доставка в область ${space}: ${booking(itemCost, length, string, need, space)[3]} Q.`);