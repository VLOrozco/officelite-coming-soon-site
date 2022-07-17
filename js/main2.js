// const dateElement = document.querySelector("#future-date");

var today; //Today's date
var futureDate; // The element that shows the message coming soon with the future date (+30days from today)

function comingSoon(today) {
  // Declare variables within the function for local scope
  var monthFromToday, date, month, year, MONTHS;
  // Add 30 days time (added in milliseconds)
  monthFromToday.setDate() = new Date(today.getDate() + 30);
  // Create array to hold names of months
  MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  // Collect parts of date to show on the page
  date = monthFromToday.getDate();
  month = MONTHS[monthFromToday.getDay()];
  year = monthFromToday.getFullYear();
  // Create future date message
  futureMonth.toDateString($(day) + ' ' + $(month) + ' ' + $(year)); 
  return futureMonth;
}

today = new Date(); //Put today's date in variable
futureDate = document.getElementById("future-date"); // Get the future-date element
futureDate.innerHTML = comingSoon(today); // adds the future date msg







// function formatDate(date) {
//   var myCurrentDate = new Date();
//   var myFutureDate = new Date(myCurrentDate);
//   myFutureDate.setDate(myFutureDate.getDate() + 30);

//   const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN","JUL", "AUG","SEP", "OCT","NOV", "DEC"];

//   return `${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
// }
