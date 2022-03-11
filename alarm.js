setInterval(setCurrentTime,1000);
function setCurrentTime(){
    let currentDate=new Date();
    let hour=currentDate.getHours();
    let minute=currentDate.getMinutes();
    let seconds=currentDate.getSeconds();
document.getElementById("current-time").innerText=`${hour}: ${minute} :${seconds}`;
}
let startTime=null;
let currentTimeElapsed=null;
 let timerId=null;
function startTimer(){
    startTime=Date.now();
console.log(startTime);
    timerId=setInterval(function(){
        currentTimeElapsed=Date.now()-startTime;
        setTimerUpdate();
    },1)
}

    function setTimerUpdate(){
        let currentMilisecElapsed=currentTimeElapsed%1000;
        let currentSecElapsed=currentTimeElapsed/1000;
        let currentMinElapsed=currentSecElapsed/60;
        let currentHourElapsed=currentMinElapsed/60;
        
        
       
        document.getElementById("timer").innerText= `${Math.floor(currentHourElapsed)%24}: ${Math.floor(currentMinElapsed)%60} :${Math.floor(currentSecElapsed)%60}:${Math.floor(currentMilisecElapsed)}`;
    }
function stopTimer(){
  if(timerId)  clearInterval(timerId);
}

function setAlarm(){
let Hour=parseInt(document.getElementById("input-hours").value);
let Min=parseInt(document.getElementById("input-minute").value);
let Sec=parseInt(document.getElementById("input-seconds").value);
let currentDate=new Date();
let Chour=currentDate.getHours();
let Cminute=currentDate.getMinutes();
let Cseconds=currentDate.getSeconds();

let s=Sec-Cseconds;
if(s<0){
    s=s+60;
    m--;
}
let m=Min-Cminute;
if(m<0){
     m=60+m;
     h--;
 }
 let h=Hour-Chour;
console.log(h,m,s);
 let totalmillisecDiff=(((h*60)+m*60)+s)*1000;
 console.log(totalmillisecDiff);
 setTimeout(function(){alert("wake up!")},totalmillisecDiff)
}