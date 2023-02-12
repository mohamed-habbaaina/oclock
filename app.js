// *********************************************
// *********** L'horloge  **********************

setInterval(setClock, 1000);    //  interval 1 second

// Les aiguilles de l'horloge
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

// fonction pour calculer degré rotation
function setClock(){
    let currentDate = new Date();
    const secondRatio = currentDate.getSeconds()/60;
    const minuteRatio = (secondRatio + currentDate.getMinutes())/60
    const hoursRatio = (minuteRatio + currentDate.getHours())/12
    
    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hoursRatio)
    
}
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock();


// *********************************************
// ************ Compte à Rebour  ***************

const time = document.querySelector('#time'); //  affichage de l'heure 
const content = document.querySelector(".content");
const selectMenu = document.querySelectorAll("select");
const setAlarmBtn = document.querySelector("#btnAlarm");
let ringtone = new Audio("./alarm/alarm.mp3");  // tonalité de l'alarme
let isAlarmSet = false;

let alarmTime;

for (let i = 12; i > 0; i--) {
    i = i < 10 ? '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 60; i >= 0; i--) {
    i = i < 10 ? '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? 'AM' : 'PM';
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}


setInterval(() => {
    
    // getting hour, minute, second
    let currentDate = new Date();
    let h = currentDate.getHours();
    let m = currentDate.getMinutes();
    let s = currentDate.getSeconds();
    let ampm = 'AM';
    
    // géré changement "am / pm"
    if(h >= 12){
        h = h-12;
        ampm = 'PM';
    }
    
    // géré quand h === 0
    h = h == 0 ? h = 12 : h;
    
    // géré quand h, m, s < 10, ajout de "0".
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    time.innerText = `${h}:${m}:${s} ${ampm}`;

    // 
    if(alarmTime == `${h}:${m} ${ampm}`){
        ringtone.play();
        ringtone.loop = true;
    }

}, 1000);

//
function setAlarm(){

    if(isAlarmSet){ // if isAlarmSet is true.
        alarmTime = ""; // vidé la valeur de alarmTime.
        ringtone.pause(); // pause la sonnerie.
        content.classList.remove("disable"); // enlever la class "disable";
        setAlarmBtn.innerText = "Set Alarm"; // remettre "Set Alarm" sur le button.
        return isAlarmSet = false; // remettre isAlarmSet a false.
    }
    
    //  get alarme
    let alarme = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    
    if(alarme.includes("Hour") || alarme.includes("Minute") || alarme.includes("AM/PM")){

        return alert("SVP, Entrer une heure valide !");
    }

    isAlarmSet = true;
    alarmTime = alarme;
    content.classList.add("disable");   //  ajout la classe disable
    setAlarmBtn.innerText = "Clear Alarm";  //  change "set Alarm" par "Clear Aalrm" sur le 'button'
}
// Le button set alarm
setAlarmBtn.addEventListener("click", setAlarm);


// *********************************************
// *************  The Stopwatch  ***************

const stopwatchAffich = document.querySelector('#stopwatchAffich');
const startwatch = document.querySelector('#startwatch');
const watchstop = document.querySelector('#watchstop');
const resetwatch = document.querySelector('#resetwatch');
let seconds = 0, interval = null;

// Event Listener 
startwatch.addEventListener('click', start_watch);
watchstop.addEventListener('click', watch_stop);
resetwatch.addEventListener('click', reset_watch);
// 

function start_watch(){
}

function start_watch(){
    
    interval = setInterval(() => {
        
        seconds++;
        
        // update stopwatch
        let hrs = Math.floor(seconds / (60 * 60));
        let mins =  Math.floor((seconds - (hrs * 60 * 60)) / 60);
        let secs = seconds % 60;

        // format if < 10 
        hrs = hrs < 10 ? "0" + hrs : hrs;
        mins = mins < 10 ? "0" + mins : mins;
        secs = secs < 10 ? "0" + secs : secs;
        let sepa = secs % 2 == 0 ? ":": " ";

        
        stopwatchAffich.innerText = `${hrs} ${sepa} ${mins} ${sepa} ${secs}`
        
    }, 1000);

}

//  function stop stopwatch
function watch_stop(){
    clearInterval(interval);
    interval = null;
}

//  function reset stopwatch
function reset_watch(){
    watch_stop();
    seconds = 0;
    stopwatchAffich.innerText = "00 : 00 : 00"
}