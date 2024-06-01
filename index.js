//
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

setInterval(()=>{
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    let ampmText = hour >= 12 ? "PM" :"AM";
    hour = hour % 12;
    hour = hour ? hour : 12;

    hours.innerHTML = (hour < 10 ? "0" : "") + hour;
    minutes.innerHTML = (minute < 10 ? "0" : "") + minute;
    seconds.innerHTML = (second < 10 ? "0" : "") + second;
    ampm.innerHTML = ampmText;
},1000);