let socket.io=();

let form = document.getElementById('form');
let myname = document.getElementById('myname');
let message = document.getElementById('message');
let messageArea = document.getElementById('messageArea');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(message.value) {
                socket.emit('send name', myname.value);
                socket.emit('send message', message.value);
                message.value = '';
            }
        });
 
        socket.on('send name', (username) => {
            let name = document.createElement('p');
            name.classList.add('message');
            name.innerHTML = `<span class="username">${username}:</span>`;
            messageArea.appendChild(name);
        });
 
        socket.on('send message', (chat) => {
            let chatContent = document.createElement('p');
            chatContent.classList.add('message');
            chatContent.textContent = chat;
            messageArea.appendChild(chatContent);
        });