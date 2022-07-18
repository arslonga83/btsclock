

const display = document.getElementById("localtime");
clock();


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
const localTime = h + " : " + m + " : " + s;
display.textContent = "Current local time is " + localTime;
setTimeout(clock, 1000)
}
