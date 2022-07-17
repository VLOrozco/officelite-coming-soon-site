const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('min');
const seconds = document.getElementById('sec');function goCountdown() {
  //the final date   
    // const fest = new Date(2022, 3, 2);
  // the system date   
  // const current = new Date();
  var myCurrentDate = new Date();
  var myFutureDate = new Date(myCurrentDate);
      myFutureDate.setDate(myFutureDate.getDate() + 30);//myFutureDate is now 30 days in the future


  //time remaining   
  const sec = (myFutureDate - myCurrentDate) / 1000;
  const d = Math.floor(sec / 3600 / 24);
  const hrs = Math.floor(sec / 3600) % 24;
  const min = Math.floor(sec / 60) % 60;
  const s = Math.floor(sec) % 60;
  days.innerText = d;
  hours.innerText = hrs;
  minutes.innerText = min;
  seconds.innerText = s;
}
// goCountdown().setInterval(goCountdown, 1000);

setInterval(() => {
  goCountdown();
}, 200);



// setInterval(() => {
  //   const now = new Date();
  
  //   timeElement.textContent = formatTime(now);
  //   dateElement.textContent = formatDate(now);
  // }, 200);


// function formatDate(date) {
//   future.setDate(future.getDate() + 30);
//   var futureDate = document.getElementById('future-date');
//   return `${future}`;
// }





// var future = new Date();
// future.setDate(future.getDate() + 30);
// var futureDate = document.getElementById('future-date');
// let futureDate = `$(future)`
// console.log(futureDate);




////////////////////////////////////////////////////////////////



// const timeElement = document.querySelector(".time");
// const dateElement = document.querySelector(".date");

/**
 * param {Date} date 
 */
/*
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
*/


/**
// at param {Date} date 
 */
/*
function formatDate(date) {
  const DAYS = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri","Sat"];
  const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}
*/


// setInterval(() => {
//   const now = new Date();

//   timeElement.textContent = formatTime(now);
//   dateElement.textContent = formatDate(now);
// }, 200);

