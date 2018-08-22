window.onload = () => {

    /* Welcome message */
    let welcomeMessageElement = document.querySelector(".welcomeMessage");
    let welcomeMessages = ["In Programming We Trust!", "The Code Is Strong In Here!"];
    let selectedElement = Math.floor(Math.random()*welcomeMessages.length);
    let title = "Programming Sandox - ";

    welcomeMessageElement.textContent = welcomeMessages[selectedElement];
    document.title = title + welcomeMessages[selectedElement];

    /* JavaScript Clock */
    let clockElement = document.querySelector(".time");
    let currentTime = new Date();

    clockElement.textContent = `${currentTime.getHours() < 10 ? "0" + currentTime.getHours() : currentTime.getHours()}:${currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes(): currentTime.getMinutes()}:${currentTime.getSeconds() < 10 ? "0" + currentTime.getSeconds() : currentTime.getSeconds()}`;

    setTimeout(updateTime, 1000);

    function updateTime() {
        currentTime = new Date();
        clockElement.textContent = `${currentTime.getHours() < 10 ? "0" + currentTime.getHours() : currentTime.getHours()}:${currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes(): currentTime.getMinutes()}:${currentTime.getSeconds() < 10 ? "0" + currentTime.getSeconds() : currentTime.getSeconds()}`;
        setTimeout(updateTime, 1000);
    }

};