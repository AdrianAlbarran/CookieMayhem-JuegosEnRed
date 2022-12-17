function loadItems(callback) {
    $.ajax({
        url: 'http://localhost:8080/items'
    }).done(function (items) {
        console.log('Items loaded: ' + JSON.stringify(items));
        callback(items);
    })
    
    // ! WE SHOULD ITERATE THROW THE LIST OF MESSAGES IF WE WANT TO SHOW ALL OF THEM IN THE CHAT
    
}

function showMessage(message)
{
	let el = document.createElement("div");
	el.setAttribute("class", "message my-message");
	el.innerHTML = '<div> <div class="name">YOU</div> <div class="text">${message.content}</div> </div>';
	
	$('.messages').append(
	' <div class="message my-message">' +
		'<div>' +
			'<div class="name">YOU</div>' +
			'<div class="text">' + message.content + '</div>' +
		'</div>' +
	'</div>'); 
}
//Create item in server
function createMessage(message, callback) {
    $.ajax({
        method: "POST",
        url: 'http://localhost:8080/messages',
        data: JSON.stringify(message), 
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (message) {
        console.log("Message created: " + JSON.stringify(message));
        callback(message);
    })
}

$(document).ready(function()
{
	    //Handle add button
    $("#send-message").click(function () {

		//input value storing the message data
		var input = $('#message-input');
        var messageData = input.val();
        input.val('');

        var message = {
            userName: 'xyz',
            content: messageData,
            type: ''
        }

        createMessage(message, function (itemWithId) {
            //When message with id is returned from server
            
            console.log('FUNCIONA ESTAÁ VIVOOO!!!');
            showMessage(itemWithId);
        });
    })
})