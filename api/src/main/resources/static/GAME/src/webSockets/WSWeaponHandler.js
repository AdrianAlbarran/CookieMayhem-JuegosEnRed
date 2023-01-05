wsWeapon.onopen = function () {
  console.log("Hi im the onopen ws function");
};

wsWeapon.onerror = function (e) {
  console.log("WS error: " + e);
};
wsWeapon.onmessage = function (msg) {
  console.log(msg);
  
  var obj = JSON.parse(msg.data);	
  
  player1.changeWeapon(obj.player1);
  
  player2.changeWeapon(obj.player2);

};

wsWeapon.sendWS = function () {
  let message = {
	id: 1,
  };

  var mes = JSON.stringify(message);

  wsWeapon.send(mes);
};
