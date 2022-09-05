
var hour = 0
var min = 0
var sec = 0
var msec = 0
var hourValue = document.getElementById('hours')
var minValue = document.getElementById('mins')
var secValue = document.getElementById('sec')
var msecValue = document.getElementById('msec')
var interval


//Start Function
var startButton = document.getElementById('startBtn').disabled = false
function start(){
    interval = setInterval(function () {
        msec++
        msecValue.innerHTML = msec
        if (msecValue.innerHTML >= 100) {
            sec++
            msec = 0
        } else if (secValue.innerHTML >= 60) {
            min++
            sec = 0
        } else if(minValue.innerHTML >= 60){
            hour++
            hourValue.innerHTML = hour
            min = 0
        }
        
        secValue.innerHTML = sec
         minValue.innerHTML = min
    }, 10);
    var startButton = document.getElementById('startBtn').disabled = true
}


//Stop Function
function stop(){
    clearInterval(interval)
    var startButton = document.getElementById('startBtn').disabled = false
}


//Reset function
function reset(){
    hourValue.innerHTML = 0
    minValue.innerHTML = 0
    secValue.innerHTML = 0
    msecValue.innerHTML = 0
}
