const hamburgerbutton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

function updateYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
}

function trackVisitors() {
    let visitorCount = localStorage.getItem("visitorCount");
    visitorCount = visitorCount ? parseInt(visitorCount) : 0;
    visitorCount++;
    localStorage.setItem("visitorCount", visitorCount);
    document.getElementById("visitorCount").textContent = visitorCount;
}

document.addEventListener("DOMContentLoaded", function () {
    updateYear();
    trackVisitors();

    const menuButton = document.getElementById("menu");
    const navigation = document.querySelector(".navigation");

    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("active");
    });

    hamburgerbutton.addEventListener('click', () => {
        nav.classList.toggle('open');
        hamburgerbutton.classList.toggle('open');
    });

});