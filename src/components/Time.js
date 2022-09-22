// For time related exports
// serverTimeStamp() is a Firebase function

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const d = new Date();

var date = d.getDate();
var month = months[d.getMonth()];
var year = d.getFullYear();

export const dateMonthYear = date + " " + month + " " + year;
export const monthYear = month + " " + year;
