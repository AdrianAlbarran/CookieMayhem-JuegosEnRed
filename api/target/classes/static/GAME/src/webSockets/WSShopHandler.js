wsShop.onopen = function () {
};

wsShop.onerror = function (e) {
  console.log("WS error: " + e);
};
wsShop.onmessage = function (msg) {
  console.log(msg);
  var obj = JSON.parse(msg.data);
  switch (obj._id) {
    case 0:
      cont1 = obj._cont;
      tienda.statText1.setText(obj._cont);
      break;
    case 1:
      cont2 = obj._cont;
      tienda.statText3.setText(obj._cont);
      break;
    case 2:
      cont3 = obj._cont;
      tienda.statText2.setText(obj._cont);
      break;
    case 3:
      cont4 = obj._cont;
      tienda.statText4.setText(obj._cont);
      break;
  }
  player1.setBuffs(obj._percentage, obj._id);
  player2.setBuffs(obj._percentage, obj._id);
  player1.economy.setMoney(obj._value);
};

wsShop.sendWS = function (id, percentage, value, cont) {
  let message = {
    _id: id,
    _percentage: percentage,
    _value: value,
    _cont: cont
  };

  var mes = JSON.stringify(message);

  wsShop.send(mes);
};
