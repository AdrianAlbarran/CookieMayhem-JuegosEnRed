//GLOBALES
var lastId = 0;
var uName = '';
var onChat = false;
var disconnected = false;

function showArrayMessage(message)
{
	message.forEach(data =>
	{
	if(lastId < data.id)
	{
		showMessageInHTML(data);
		lastId = data.id;
	} 	// if end
	}); //foreach end
}

function showMessage(message)
{
		showMessageInHTML(message);
}

function showMessageInHTML(data)
{
	// type
	// 100 = mis mensajes, a la derecha
	// 101 = otros mensajes, a la izquierda
	// 200 = mensaje de entrada en el server
	// 201 = mensaje de salida en el server

	if (data.type == 200)
	{
		$('.messages').append(
			'<div class="update">' +
			data.userName + ' has joined the lobby' +
			'</div>'
		);
	}
	else if (data.type == 201)
	{
		$('.messages').append(
			'<div class="update">' +
			data.userName + ' has left the lobby' +
			'</div>'
		);
	}
	else if(data.type == 100 || data.userName == uName)
	{
		$('.messages').append(
		' <div class="message my-message">' +
			'<div>' +
				//Implementar message.userName
				'<div class="name">' + data.userName + '</div>' +
				'<div class="text">' + data.content + '</div>' +
			'</div>' + 
		'</div>'); 
	} 
	else if (data.type == 101)
	{
		$('.messages').append(
		' <div class="message other-message">' +
			'<div>' +
				//Implementar message.userName
				'<div class="name">' + data.userName + '</div>' +
				'<div class="text">' + data.content + '</div>' +
			'</div>' + 
		'</div>'); 
	} 

	
}

//Create item in server
function postMessage(message) {
    $.ajax({
        method: "POST",
        url: window.location.href + 'messages',
        data: JSON.stringify(message), 
        processData: false,
        headers: {
            "Content-Type": "application/json"
        },
    }).done(function (message) {
       
		if(message.type == 101)
		{
			message.type = 100;
		}
       	getMessage();
    })
}


function getMessage()
{
	$.ajax({
		method: "GET",
        url: window.location.href + 'messages',
		success:function(result){
			if(disconnected){
				disconnected = false;
     		 console.log("Server Reconnected");
     		$('.messages').append(
				'<div class="update">' +
				'Server Reconnected' +
				'</div>'
     			);
			}
			showArrayMessage(result);
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			if(!disconnected ){
			 disconnected = true;
     		 console.log("Server Disconnected");
     		$('.messages').append(
				'<div class="update">' +
				'Server Disconnected' +
				'</div>'
     			);
     		}
 },
	});
}


function enterChat()
{
	
	setInterval(function() {
  $.ajax({
    url: window.location.href + 'heartbeat',
    type: 'POST',
    data: {uName},
    success: function(response) {
      console.log('Heartbeat sent');
    },
      
    
  });
}, 500); // send a heartbeat message every 10 seconds

	if(uName.length == 0 || /\s/.test(uName)){
		 alert("You can't enter an space in the username!");
		 return;
	}
	
	var app = document.querySelector(".app");
	app.querySelector(".join-screen").classList.remove("active");
	app.querySelector(".chat-screen").classList.add("active");
	onChat = true;
	createMessage(200, '');
}

function exitChat()
{
	var app = document.querySelector(".app");
	app.querySelector(".join-screen").classList.add("active");
	app.querySelector(".chat-screen").classList.remove("active");
	onChat = false;
	
	createMessage(201, '');
	
}
function createMessage(_type, messageData)
{	
    var message = {
    	userName: uName,
    	content: messageData,
    	type: _type
    }
    
  	postMessage(message);
}

$(document).ready(function()
{
	
	var intervalId = window.setInterval(function(){
		if(onChat == true)
		{
			getMessage();
		}
	}, 1000);
	
	
	    //Handle add button
    $("#send-message").click(function () {

		//input value storing the message data
		var input = $('#message-input');
        var messageData = input.val();
        input.val('');
        
        if(!/\S/.test(messageData)){
			alert("You can't enter only spaces!");
		} else {
			 createMessage(100, messageData);
		}
       
    });
    
    $(".join-screen #join-user").click(function ()
    {
		//input value storing the message data
		var input = $('#username');
		var messageData = input.val();
		
		input.val('');
		uName = messageData;
		enterChat();
	});
	
	$(".header #exit-chat").click(function()
	{
		exitChat();
	});
	
	if(onChat == true)
	{
		getMessage();
	}
	
});