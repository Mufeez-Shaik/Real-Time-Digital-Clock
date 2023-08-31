const display = document.getElementById('time-disp');
const timeformate = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(timeCycle,1000)
})

function timeCycle(){

    let date = new Date();
    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    // hr = hr>12? hr-12 : hr;
    // timeformate.innerHTML ='PM'

    if(hr>12){
        hr = hr-12;
        timeformate.innerHTML ='PM';
    }
    else{
        hr = hr;
        timeformate.innerHTML = "AM"
    }

    hr = hr < 10 ? `0${hr}` : hr;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

   

display.textContent=`${hr} : ${mins} : ${secs}`;




}