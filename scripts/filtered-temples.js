const now = new Date();
const year = now.getFullYear();
const hamburgerbutton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
        templeName: "Montevideo Uruguay",
        location: "Montevideo, Uruguay",
        dedicated: "2001, March, 18",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montevideo-uruguay/400x250/montevideo-uruguay-temple-lds-83476-wallpaper.jpg"
    },
    {
        templeName: "Praia Cape Verde",
        location: "Praia, Cape Verde",
        dedicated: "2022, June, 19",
        area: 8759,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/praia-cape-verde/400x250/praia_cape_verde_temple-main.jpeg"
    },
    // Add more temple objects here...
];

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

function templeCardsTemplate(temple) {
    return `<div class="cards">
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area} sq ft</p>   
            <img src="${temple.imageUrl}" alt="picture of the ${temple.templeName} temple in ${temple.location}" loading="lazy" width="400" height="200">     
    </div>`
};

const templeCards = temples.map(templeCardsTemplate);
document.querySelector(".templelist").innerHTML = templeCards.join("");

//Navigation behaviors
const navHome = document.querySelector("#homepage");
const navOld = document.querySelector("#old");
const navNew = document.querySelector("#new");
const navLarge = document.querySelector("#large");
const navSmall = document.querySelector("#small");
const pageTitle = document.querySelector("#title");

function filterTemples(templesList, filter = "home") {
    let filteredTemples = templesList;

    if (filter === "old") {
        filteredTemples = templesList.filter((temple) =>
            parseInt(temple.dedicated.slice(0, 4)) < 1900
        );
    } else if (filter === "new") {
        filteredTemples = templesList.filter((temple) =>
            parseInt(temple.dedicated.slice(0, 4)) > 2000
        );
    } else if (filter === "large") {
        filteredTemples = templesList.filter((temple) => temple.area > 90000);
    } else if (filter === "small") {
        filteredTemples = templesList.filter((temple) => temple.area < 10000);
    }

    pageTitle.innerText = filter.toUpperCase();

    const filteredTempleCards = filteredTemples.map(templeCardsTemplate);
    document.querySelector(".templelist").innerHTML = filteredTempleCards.join("");
}

navHome.addEventListener("click", function () {
    filterTemples(temples);
});
navOld.addEventListener("click", function () {
    filterTemples(temples, "old");
});
navNew.addEventListener("click", function () {
    filterTemples(temples, "new");
});
navLarge.addEventListener("click", function () {
    filterTemples(temples, "large");
});
navSmall.addEventListener("click", function () {
    filterTemples(temples, "small");
});