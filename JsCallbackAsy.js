/* //how to use callback functionality
function display(result) {
  console.log(`the sum is ${result}`);
}

function calculate(callback) {
  let no1 = 5;
  let no2 = 10;
  let sum = no1 + no2;
  callback(sum);
}
calculate(display);
// how to use settimeout function which concept of callback

function displaytext(text) {
  //console.log(`hello payal`);
  //this is way to pass function as arguments.
  /* setTimeout(function () {
    console.log(`hello payal`);
  }, 3000); 

  //this way to pass parameter in function

  console.log(`this is payal patel ${text}`);
}
//this is way to pass only function name.
function hello() {
  setTimeout(function () {
    displaytext("hello");
  }, 3000);
}

hello() 
//displaytext();*/

/* <------setIntervalExample------>*/

/*function DisplayCurrentTime() {
  let tdate = new Date();
  console.log(
    `today is ${tdate.toLocaleDateString()} : ${tdate.getHours()} : ${tdate.getMinutes()} : ${tdate.getMilliseconds()}`
  );
}

function settime() {
  setInterval(DisplayCurrentTime, 1000);
}
//DisplayCurrentTime();
//settime();*/

//make a function to load html file.

function contentDisplay(value) {
  console.log(value);
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open("GET", "mycar.html");
  req.onload = function () {
    if (req.status == 200) {
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  };
  req.send();
}

//getFile(myDisplayer);

getFile(contentDisplay);
