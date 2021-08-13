// Constructor function for Person objects
function Person(fname, lname, age, id, nationality) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.id = id;
  this.nationality = nationality;
  this.fullName = function () {
    return this.fname + " " + this.lname;
  };
  this.chageName = function (name) {
    return (this.lname = name);
  };
}

const emp1 = new Person("payal", "patel", 35, "em15", "india");
//emp1.nationality = "india";
const emp2 = new Person("shiv", "patel", 6, "em16");
console.log(
  emp1.fname +
    emp1.lname +
    emp1.age +
    emp1.id +
    emp1.nationality +
    emp1.fullName() +
    emp1.chageName("patel1")
);
console.log(
  emp2.fname +
    emp2.lname +
    emp2.age +
    emp2.id +
    emp2.fullName() +
    emp2.chageName("chinki")
);
console.log(emp2.lname);
console.log(emp1.lname);
//emp2.fullname = function () {
//return this.fname + " " + this.lname;
//};
//
//console.log(emp2.fullname());
console.log(Person);
//Using Object prototype to allow add method and property in exsiting object constructor;
function Toys(name, type, price) {
  this.name = name;
  this.type = type;
  this.price = price;
}
const toy1 = new Toys("horse", "hard", "25");
console.log(toy1.name + " " + toy1.type + " " + toy1.price);
Toys.prototype.size = "small";
console.log(toy1.size);
Toys.prototype.style = function () {
  return this.name + " " + this.type;
};

console.log(toy1.style());
