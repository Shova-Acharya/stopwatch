let time = document.querySelector(".timer");
let second = 0;
let minute = 0;
let hour = 0;
let startCountdown = 0;
 

function onStart(){
    startCountdown = setInterval(countdown, 1000);
}

function countdown(){
    time.textContent = `${hour}:${minute}:${second}`

    second++;

    //adding the minute
    if (second > 59){
        minute ++;
        second = 0;
        second++;
    }
    //adding the hour
    if(minute > 59){
        hour++;
        minute = 0;
        minute++;
    }

   time.textContent = 
    (hour<10? "0"+hour : hour) + ":" +
    (minute<10? "0"+minute: minute) + ":" +
    (second<10? "0"+second:second) ;

}

function onPause(){
    clearInterval(startCountdown);
    startCountdown = 0;  
}

function onStop(){
    clearInterval(startCountdown);
    time.textContent="00:00:00"
    second = 0;
    minute = 0;
    hour = 0;
}



function onRestart(){
    clearInterval(startCountdown);
    time.textContent="00:00:00"
    second = 0;
    minute = 0;
    hour = 0;
    onStart();
}