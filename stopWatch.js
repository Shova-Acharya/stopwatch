let time = document.querySelector(".timer");

let second = 0;
let minute = 0;
let hour = 0;
let timerInterval;

function renderTime(){
    time.textContent = 
    (hour<10? "0"+hour : hour) + ":" +
    (minute<10? "0"+minute: minute) + ":" +
    (second<10? "0"+second:second) ;   
}
 
function onStart(){
    if(timerInterval == null){
        timerInterval = setInterval(countdown, 1000);
    }  
}

function countdown(){
    renderTime();
    second++;

    //adding the minute
    if (second > 59){
        minute ++;
        second = 0;
    }
    //adding the hour
    if(minute > 59){
        hour++;
        minute = 0;
    }
}

function onPause(){
    clearInterval(timerInterval);
    timerInterval = undefined;  
}

function onStop(){
    clearInterval(timerInterval);
    timerInterval = undefined;
    second = 0;
    minute = 0;
    hour = 0;
    renderTime();
}

function onRestart(){
   onStop();
   onStart();
}