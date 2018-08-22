window.onload = () => {
/* *************************** */
/* Welcome message */
/* *************************** */

    /* select span element with welcomeMessage class from DOM */
    let welcomeMessageElement = document.querySelector(".welcomeMessage");
    /* create the array for possible welcome messages */
    let welcomeMessages = ["In Programming We Trust!", "The Code Is Strong In Here!"];
    /* select random element from welcomeMessages array */
    let selectedElement = Math.floor(Math.random()*welcomeMessages.length);
    /* create prefix for the document.title element*/
    let title = "Programming Sandox - ";

    /* add the randomly selected welcome message to DOM element with welcomeMessage class */
    welcomeMessageElement.textContent = welcomeMessages[selectedElement];
    /* combine title prefix with the welcome message to create the document.title */
    document.title = title + welcomeMessages[selectedElement];

/* *************************** */
/* Scrolling effect for navigation links */
/* *************************** */

    /* select the programmingsandbox logo link element and add onclick event*/
    document.querySelector("[href='index.html']").onclick = function (event) {
        /* prevent default event */
        event.preventDefault();
        /* add scroll effect to the start of header element */
        document.querySelector("header").scrollIntoView({behavior: "smooth", block: "start"});
    };

    /* select all the navigation link element */
    let navigationLinks = document.querySelectorAll(".main-nav a");
    /* loop all navigation link elements, stop the default event on click and create new scroll effect on click*/
    for (let x = 0; x < navigationLinks.length; x++) {
        /* add onclick event for all navigation link elements */
        navigationLinks[x].onclick = function (event) {
            /* prevent default event */
            event.preventDefault();
            /* add scrolling effect for the clicked element and select target element by href*/
            document.querySelector(this.getAttribute("href")).scrollIntoView({behavior: "smooth", block: "start"});
        };
    }

/* *************************** */
/* Add sticky navigation menu after landing page */
/* *************************** */
    window.onscroll = function() {
        /* select the navigation menu */
        let navigationMenu = document.querySelector("nav");
        /* add sticky navigation menu if the landing page has been scrolled of the page */
        if(window.pageYOffset >= window.innerHeight) {
            navigationMenu.setAttribute("data-sticky", "sticky");
        }
        else {
            navigationMenu.removeAttribute("data-sticky");
        }
    };

    /* add same behaviour if you load the page under the landing page */
    /* select the navigation menu */
    let navigationMenu = document.querySelector("nav");
    /* add sticky navigation menu if the landing page has been scrolled of the page */
    if(window.pageYOffset >= window.innerHeight) {
        navigationMenu.setAttribute("data-sticky", "sticky");
        console.log("hello");
    }
    else {
        navigationMenu.removeAttribute("data-sticky");
    }

/* *************************** */
/* Scrolling effect for landing page down arrow */
/* *************************** */

    document.querySelector(".arrow-down").onclick = function () {
        /* add scrolling effect to first section on DOM */
        document.querySelector(navigationLinks[0].getAttribute("href")).scrollIntoView({behavior: "smooth", block: "start"});
    };

/* *************************** */
/* JavaScript Clock */
/* *************************** */

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