// Q1 FIND HOW MANY YEARS HAVE PASSED FROM 1970 TILL NOW?



// const now =new Date();
// const startyear = 1970;
// const yearspasssed = now.getFullYear() - startyear;
// console.log(`it has been ${yearspasssed}years since 1970.`)
  


var date = new Date()
var milliSecFrom1970 = date.getTime()
console.log("milliseconds=",milliSecFrom1970);
console.log("seconds=",Math.floor(milliSecFrom1970 / 1000));
console.log("minutes=",Math.floor(milliSecFrom1970 / 1000 / 60));
console.log("hours=",Math.floor(milliSecFrom1970 / 1000 / 60 / 60));
console.log("days=",Math.floor(milliSecFrom1970 / 1000 / 60 / 60 / 24));
console.log("months=",Math.floor(milliSecFrom1970 / 1000 / 60 / 60 / 24 / 30));
console.log("years=",Math.floor(milliSecFrom1970 / 1000 / 60 / 60 / 24 / 365));



// Q2 HOW MUCH TIME REMAINING IN BAKRA EID ?


var baqraEidDate = new Date()

baqraEidDate.setDate(16);
baqraEidDate.setMonth(5);

console.log("baqraEidDate milliseconds=",baqraEidDate.getTime())
console.log("millsecfrom1970=",milliSecFrom1970)

var difference = baqraEidDate.getTime() - milliSecFrom1970;
console.log(difference / 1000 / 60 / 60 / 24);



//   CLOCK 

// var time = new Date();
// var updatedtime = setInterval(function(){
// var time = new Date()
// console.log(time);
// },1000)



// var hours = document.getElementById("hours")
// var minutes = document.getElementById("minutes")
// var seconds = document. getElementById("seconds")

// var updated = setInterval(function(){   
//     var date = new Date()
//     hours.innerText = date.getHours()
//     minutes.innerText = date.getMinutes()
//     seconds.innerText = date.getSeconds()
// },1000)


// clearInterval(updated)
 





// STOP WATCH BY AI:(not working)


// let starttime;
// let elapsedTime = 0;
// let timeInterval;

// function startStopWatch(){
//     starttime = Date.now()-elapsedTime;
//     timeInterval = setInterval(function(){
//         elapsedTime=Date.now()-starttime;
//         console.log(formatTime(elapsedTime));

//     }
// }
// function stopStopWatch(){
//     clearInterval(timeInterval)
// }
// function formatTime(time){
//     let milliseconds = Math.floor(time%1000);
//     let seconds = Math.floor(time / 1000) % 60;
//     let minutes = Math.floor(time / (1000 * 60))%60;
//     let hours = Math.floor(time / (1000 * 60 *60))%24;


//     return`${hours}:${minutes}:${seconds}.${milliseconds}`;

// }

// startStopWatch();
// setTimeout(stopStopWatch,5000);


