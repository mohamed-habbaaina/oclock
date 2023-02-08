// ********* L'horloge  ***************

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