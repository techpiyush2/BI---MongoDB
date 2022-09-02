function showDate(){
    var todayDate = new Date();
    var date = todayDate.getDate();
    var month = todayDate.getMonth();
    var year = todayDate.getFullYear();

    var todayDate = date + "/" + month + "/" + year ; 
    document.getElementById("dateContainer").innerText = todayDate ;
}
showDate();

function getTime(){
    var date = new Date();
    var hours = date.getHours(); 
    var minutes = date.getMinutes(); 
    var seconds = date.getSeconds();

    hours = hours < 10 ? 0 + "" + hours: hours ;
    minutes = minutes < 10 ? 0 + "" + minutes: minutes ;
    seconds = seconds < 10 ? 0 + "" + seconds : seconds ;
    
    var time = hours + ":" + minutes + ":" + seconds ;
    document.getElementById("clockContainer").innerText = time;
}

var referenceTime;
 
function startClock(){
 referenceTime = setInterval(getTime,1000);
}

function stopClock(){
  clearInterval(referenceTime)
}

startClock();