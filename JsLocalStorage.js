const obj = {
  name: "payal",
  age: 30,
  id: "payalpatel",
};
// object convert in json
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
console.log(myJSON);
let mydata = JSON.parse(myJSON);
console.log(mydata.name);

//get a data from server.

const myrequest = new XMLHttpRequest();
myrequest.onload = function () {
  if (myrequest.status === 200 && myrequest.statusText == "OK") {
    let mydata = JSON.parse(myrequest.responseText);
    console.log(mydata.name);
  }
};

myrequest.open("GET", "json_demo.txt");
myrequest.send();
