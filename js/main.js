// current browser date
var date = new Date();

// 30 days from current date
var futureDate = new Date(date.setDate(date.getDate() + 30));


function releaseDate() {
  var comingSoon = document.getElementById('future-date');

  var dateNum = futureDate.getDate();
  var month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"][futureDate.getMonth()];

  var year = futureDate.getFullYear();

  var comingSoonMsg = comingSoon.innerText = dateNum + ' ' + month + ' ' + year;

  return comingSoonMsg;
}
releaseDate();


function countdown() {
  // get futureTime & now TIME in milliseconds and subtract to get the gap between both
  var futureTime = new Date(futureDate).getTime();
  var now = new Date().getTime();
  const gap = futureTime - now;

  // establish in js how time works
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  // Get DOM elements & add to DOM to display countdown timer
  var dayTxt = document.getElementById('days');
  var hrsTxt = document.getElementById('hours');
  var minTxt = document.getElementById('min');
  var secTxt = document.getElementById('sec');

  dayTxt.innerText = days;
  hrsTxt.innerText = hours;
  minTxt.innerText = minutes;
  secTxt.innerText = seconds;
}
// countdown();
setInterval(countdown, 1000);
// delete countdown(); and remove comments from setInterval once page completed