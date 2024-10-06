const windy = document.querySelector('#windy');

function calculatewindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * tempC * Math.pow(speed, 0.16)
    );
}

let temp = 10;
let windspeed = 4;
if (temp <= 10 && windspeed > 4.8) {
    windy.textContent = calculatewindChill(tempC, speed).toFixed(1);
} else {
    windy.textContent = "N/A";
}