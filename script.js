

const display = document.getElementById("localtime");
const display2 = document.getElementById("day");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
clock();
const kdisplay = document.getElementById("koreantime");
const kdisplay2 = document.getElementById("koreanday");
koreantime();


function clock() {
const date = new Date();
const h = date.getHours().toLocaleString('en-US', {
    minimumIntegerDigits: 2, 
    useGrouping:false
});
const m = date.getMinutes().toLocaleString('en-US', {
    minimumIntegerDigits: 2, 
    useGrouping:false
});
const s = date.getSeconds().toLocaleString('en-US', {
    minimumIntegerDigits: 2, 
    useGrouping:false
});
const d = days[date.getDay()];
const localTime = h + " : " + m + " : " + s;
display.textContent = localTime;
display2.textContent = d;
setTimeout(clock, 1000) //reruns the script once per second
}


function koreantime() {
const date = new Date();

let i = date.getDay(); //sets day to a variable so we can push it ahead when needed
let d = days[i];

let h = date.getHours().toLocaleString('en-US', {
    minimumIntegerDigits: 2, 
    useGrouping:false
});
let kh = +h + 16; //add 16 hours to local time...would need to adjust for daylight savings
if (kh >= 8) {
    d = days[i+1];
}
if (+kh >= 24) {
    kh -= 24;
}

const km = date.getMinutes().toLocaleString('en-US', { //minutes and seconds don't need adjusting
    minimumIntegerDigits: 2, 
    useGrouping:false
});
const ks = date.getSeconds().toLocaleString('en-US', {
    minimumIntegerDigits: 2, 
    useGrouping:false
});

const koreanTime = kh + " : " + km + " : " + ks;
kdisplay.textContent = koreanTime;
kdisplay2.textContent = d;
setTimeout(koreantime, 1000)
}