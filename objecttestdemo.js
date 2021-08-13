const obj = {
  0: {
    fname: "payal",
    lname: "patel",
    age: 30,
  },

  1: {
    fname: "shiv",
    lname: "patel",
    age: 9,
  },
  2: {
    fname: "anav",
    lname: "patel",
    age: 9,
  },
};
debugger;
let arrr = [];
function retval() {
  let val = [];
  for (let x in obj) {
    val.push(Object.values(obj[x]));
    console.log(val);
  }

  arrr = [].concat.apply([], val);
  console.log(arrr);
}
retval();
//console.log(obj["0"]["fname"]);
