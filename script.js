const date = new Date();
const utcTime = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();

const display = document.getElementById("utctime");

display.textContent = "Current UTC time is " + utcTime;

