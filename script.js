const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const birthday = '9 June 2022'

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date()

const totalSeconds = new Date(birthdayDate - currentDate) / 1000;

const days = Math.floor (totalSeconds / 3600 / 24);
const hours = Math.floor (totalSeconds / 3600) % 24; 
const mins = Math.floor (totalSeconds / 60 ) % 60;     
const seconds = Math.floor (totalSeconds)% 60;

daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minsEl.innerHTML = mins;
secondsEl.innerHTML = seconds;
   
}
//initial call
countdown();

setInterval(countdown, 1000)

