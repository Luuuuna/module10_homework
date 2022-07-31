const initBtn = document.querySelector(".btn_message");
const initInput = document.querySelector(".input_message");
const windowChat = document.querySelector(".window_chat");
const btnGeolocation = document.querySelector(".geolocation");
//сохраняем ссылку на сервер в переменную
const serverUrl = `wss://echo-ws-service.herokuapp.com`;
//открываем соединение с сервером
let websocket = new WebSocket(serverUrl);
//делаем функцию конструктор для создания блоков с сообщениями в чате
function writeToScreen(message, classes, tag) {
    let lineMessage = document.createElement('div');
    lineMessage.className = "line_message";
    windowChat.append(lineMessage);
    let messageClient = document.createElement(tag);
    messageClient.className = classes;
    messageClient.innerHTML = message;
    lineMessage.append(messageClient);
}

//добавляем обработчик для кнопки отправить
initBtn.addEventListener('click', () => {
    const inputValue = document.querySelector(".input_message").value;
    if (!inputValue) {
        //если инпут пуст, выходим
        return;
    } else {
        //если инпут имеет какое то значение, вызываем функцию конструктор
        writeToScreen(inputValue, "client", "p");
        //отправляем значение инпута на сервер
        websocket.send(inputValue);
    }

    websocket.onmessage = function (event) {
        //обрабатываем данные полученные от сервера. вызывем функцию конструктор для отоброжения ответа

        writeToScreen(event.data, "server", "p");
    }
});
//добавляем обработчик для кнопки отправить геолокацию

btnGeolocation.addEventListener('click', () => {

    if ("geolocation" in navigator) {
        //если геолокацию удалось получить вызываем метод для обработки
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            //сохраняем данные геолокации в переменные
            const latitude = coords.latitude;
            const longitude = coords.longitude;
            //вызываем функцию конструктор для отображения ссылки
            writeToScreen('ссылка на карту', "map_link", "a");
            const mapLink = document.querySelector(".map_link");
            mapLink.textContent = 'Гео-локация';
            mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        })
    }
});