const now = new Date();
const year = now.getFullYear();
const hamburgerbutton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

document.getElementById('lastModified').textContent = document.lastModified;
document.getElementById('currentYear').textContent = year;

hamburgerbutton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburgerbutton.classList.toggle('open');
    //remove the next 4 lines if it doesnt work
    const links = navigation.querySelectorAll('a');
    links.forEach(link => {
        link.style.display = navigation.classList.contains('open') ? 'block' : 'none';
    });
});