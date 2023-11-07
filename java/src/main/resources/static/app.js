var a
const stompClient = new StompJs.Client({
    brokerURL: 'ws://localhost:8080/chatKlasowaWebsocket'
});

stompClient.onConnect = (frame) => {

    console.log('Connected: ' + frame);
    stompClient.subscribe('/klasowaws/chat/messages/'+a, (messages) => {
        showGreeting(messages.body);
        
    });
    stompClient.subscribe('/chat/messages/'+a, (messages) => {
        showGreeting(messages.body.content);
        console.log("wiadomosc"+messages.body)
    });
};

stompClient.onWebSocketError = (error) => {
    console.error('Error with websocket', error);
};

stompClient.onStompError = (frame) => {
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
};

function connect() {
	a=document.querySelector('#fname').value;
	
    stompClient.activate();
}

function disconnect() {
    stompClient.deactivate();

    console.log("Disconnected");
}

function sendName() {
		const date = new Date();
	Imie=document.querySelector('#Imie').value;

	Content=document.querySelector('#Wiadomosc').value;

    stompClient.publish({
        destination: "/klasowaws/Message/"+a,
        body: JSON.stringify({'chatName':a.toString(),'fromUser': Imie.toString(),'messageDate':date.toString(),'messageContent':Content.toString()})
    });
}

function showGreeting(message) {
    console.log("wiadomsoc doszla"+message)
}
