class Person {
  constructor(fname, lname, year) {
    this.fname = fname;
    this.lname = lname;
    this.year = year;
  }

  fullname() {
    console.log(`My Name is ${this.fname} ${this.lname}`);
  }

  countage() {
    let cyear = new Date();
    console.log(`my age is ${this.year - cyear.getFullYear()}`);
  }
}

class engineer extends Person {
  constructor(fname, lname, year, noOfExperience) {
    super(fname, lname, year);
    this.noOfExperience = noOfExperience;
  }

  displayexperience() {
    console.log(`${this.fullname()} have a experience ${this.noOfExperience}`);
  }
}

const args = [
  new engineer("payal", "patel", 1987, 13),
  new engineer("shiv", "patel", 2014, 6),
];

function alldeatil(args) {
  for (let x of args) {
    x.displayexperience();
    x.countage();
  }
}
alldeatil(args);
