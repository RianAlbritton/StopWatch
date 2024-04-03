

/*an array for all values in the timer*/
let [msecond,second,minute,hour] = [0,0,0,0];
let timerRun = document.querySelector('#time');
let int = null;

/*event Listeners for all 3 buttons and how to respond on a click*/
document.getElementById('start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('zero').addEventListener('click', ()=>{
    clearInterval(int);
    [msecond,second,minute,hour] = [0,0,0,0];
    timerRun.innerHTML = '00 : 00 : 00 : 000 ';
});

/*function for the timer*/
function displayTimer(){
    msecond += 10;
    if(msecond == 1000){
        msecond = 0;
        second++;
        if(second == 60){
            second = 0;
            minute++;
            if(minute == 60){
                minute = 0;
                hour++;
            }
        }
    }

 let h = hour < 10 ? "0" + hour : hour;
 let m = minute < 10 ? "0" + minute : minute;
 let s = second < 10 ? "0" + second : second;
 let ms = msecond < 10 ? "0" + msecond : msecond < 100 ? "0" + msecond : msecond;

 timerRun.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
