function loadItems(callback) {
    $.ajax({
        url: 'http://localhost:8080/items'
    }).done(function (items) {
        console.log('Items loaded: ' + JSON.stringify(items));
        callback(items);
    })
    
    // ! WE SHOULD ITERATE THROW THE LIST OF MESSAGES IF WE WANT TO SHOW ALL OF THEM IN THE CHAT
    
}

function showArrayMessage(message)
{
	console.log(message);
	message.forEach(data =>
	{
	console.log(data);
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
	// 0 = mis mensajes, a la derecha
	// 1 = otros mensajes, a la izquierda
	
	if(data.type == 0)
	{
		console.log('ES UNO ' + data.type);
		$('.messages').append(
		' <div class="message my-message">' +
			'<div>' +
				//Implementar message.userName
				'<div class="name">' + data.userName + '</div>' +
				'<div class="text">' + data.content + '</div>' +
			'</div>' + 
		'</div>'); 
	} 
	else if (data.type == 1)
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
        url: 'http://localhost:8080/messages',
        data: JSON.stringify(message), 
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (message) {
        lastId++;
        message.type = 0;
       	showMessage(message);
    })
}

function getMessage()
{
	$.ajax({
		method: "GET",
        url: 'http://localhost:8080/messages',
		success:function(result){
			console.log(result);
			showArrayMessage(result);
		}
	})
}

var lastId = 0;
$(document).ready(function()
{
	getMessage();
	
	var intervalId = window.setInterval(function(){
		getMessage();
  		
	}, 1000);
	
// call your function here
	    //Handle add button
    $("#send-message").click(function () {

		//input value storing the message data
		var input = $('#message-input');
        var messageData = input.val();
        
        input.val('');

        var message = {
            userName: 'xyz',
            content: messageData,
            type: 0
        }
		
        postMessage(message);
        
    })
})