const day = document.getElementById("days");
const hour = document.getElementById("hours");
const min = document.getElementById("mins");
const sec = document.getElementById("seconds");


const newYears  = '1 Jan 2023';


function countdown(){
    document.getElementById("days").innerHTML=null;
    document.getElementById("hours").innerHTML=null;
    document.getElementById("mins").innerHTML=null;
    document.getElementById("seconds").innerHTML=null;
const newYearsDate = new Date(newYears);
const currentDate = new Date();
const totalSeconds = (newYearsDate - currentDate)/1000;
const days = Math.floor(totalSeconds/3600/24);
const hours = Math.floor(totalSeconds/3600)%24;
const minutes = Math.floor(totalSeconds/60)%60;
const seconds = Math.floor(totalSeconds) % 60;
// console.log(days,hours,minutes,seconds);

// day.innerHTML = days;
// hour.innerHTML = hours;
// min.innerHTML = minutes;
// sec.innerHTML = seconds;

document.getElementById("days").append(days)
document.getElementById("hours").append(hours)
document.getElementById("mins").append(minutes)
document.getElementById("seconds").append(seconds)
}
countdown();

setInterval(countdown,1000);