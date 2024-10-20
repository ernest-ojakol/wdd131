const today = new Date();
currentyear.innerHTML = `<span class="currentyear">© ${today.getFullYear()}</span>`;

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = lastModified;

const visitsDisplay = document.querySelector(".visits");

let numberOfVisits = Number(window.localStorage.getItem("numberOfVisits-ls")) || 0;

if (numberOfVisits !== 0) {
    visitsDisplay.textContent = numberOfVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numberOfVisits++;

localStorage.setItem("numberOfVisits-ls", numberOfVisits);