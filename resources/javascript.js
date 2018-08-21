window.onload = () => {

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