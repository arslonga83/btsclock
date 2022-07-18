

const display = document.getElementById("localtime");
clock();
const kdisplay = document.getElementById("koreantime");
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
const localTime = h + " : " + m + " : " + s;
display.textContent = localTime;
setTimeout(clock, 1000)
}


function koreantime() {
const date = new Date();
let kh = date.getHours().toLocaleString('en-US', {
    minimumIntegerDigits: 2, 
    useGrouping:false
});
//kh += 16;
//if (kh >= 24) {
//    kh -= 24;
//}
const km = date.getMinutes().toLocaleString('en-US', {
    minimumIntegerDigits: 2, 
    useGrouping:false
});
const ks = date.getSeconds().toLocaleString('en-US', {
    minimumIntegerDigits: 2, 
    useGrouping:false
});
const koreanTime = kh + " : " + km + " : " + ks;
kdisplay.textContent = koreanTime;
console.log(kh, km, ks);
setTimeout(koreantime, 1000)
}