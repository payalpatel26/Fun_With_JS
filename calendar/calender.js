// for display time with am and pm
function Displaytime() {
  const todaydate = new Date();
  var ampm = todaydate.getHours() >= 12 ? "PM " : "AM"; // for am pm
  var hours = todaydate.getHours();
  hours = hours.toString().length == 1 ? 0 + hours.toString() : hours; // to show hours with 0 if have number ( 0 to9)
  var minutes = todaydate.getMinutes();
  minutes = minutes.toString().length == 1 ? 0 + minutes.toString() : minutes; // to show hours with 0 if have number ( 0 to9)
  var Seconds = todaydate.getSeconds();
  Seconds = Seconds.toString().length == 1 ? 0 + Seconds.toString() : Seconds; // to show hours with 0 if have number ( 0 to9)
  document.getElementById("htime").innerHTML =
    hours + " : " + minutes + " : " + Seconds + " " + ampm;
  displayContinueTime();
}
//display monthand year and day
function displaymonthandday() {
  const datetoday = new Date();
  displayMonthName(datetoday);
  displayDay(datetoday);
  document.getElementById("btntoday").innerHTML = datetoday.toDateString();
}
// for display continues time
function displayContinueTime() {
  var refresh = 1000; // refresh rate show milisecond;
  const newtime = setTimeout("Displaytime()", refresh);
}

// for display to month and year for middle div

function displayMonthName(td) {
  const Month_Name = [
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
    "December",
  ];

  document.getElementById("hmonthyear").innerHTML =
    Month_Name[td.getMonth()] + "  " + td.getFullYear();
}

function displayDay(td) {
  //let current = new Date();
  //cleardaybuttontxt();
  var strday = new Date(td.getFullYear(), td.getMonth(), 1).getDay(); //get first day of current month.
  var lastDay = new Date(td.getFullYear(), td.getMonth() + 1, 0).getDate(); //get total days of current month.
  var str = "";
  var j = 1;
  var endday = strday - 1 + lastDay;

  for (i = strday; i <= endday; i++) {
    while (j <= lastDay) {
      str = "btn" + i;
      document.getElementById(str).innerHTML = j;
      j++;
      break;
    }
  }
}
// which show previous month calender function.
function premonth() {
  let predate = new Date();
  predate.setMonth(predate.getMonth() - 1);
  displayMonthName(predate);
  cleardaybuttontxt();
  displayDay(predate);
}
//which show next month calender function
function nextmonth() {
  let nextdate = new Date();
  nextdate.setMonth(nextdate.getMonth() + 1);
  displayMonthName(nextdate);
  cleardaybuttontxt();
  displayDay(nextdate);
}

// function which clear text all 1 to 34 button clear text;

function cleardaybuttontxt() {
  for (let i = 0; i < 37; i++) {
    let strbtn = "btn" + i;
    console.log(strbtn);
    //console.log(document.getElementById(strbtn).innerHTML.length);
    if (document.getElementById(strbtn).innerHTML !== "") {
      document.getElementById(strbtn).innerHTML = "";
    }
  }
}
