// function expression and data strore in variable.
const multi = function (a, b) {
  return a * b;
};

console.log(multi(4, 3) * 2);

// self invoking function where it call by itself
(function (a = 50, b = 10) {
  console.log(a - b);
})();

//arguments.length property returns the number of arguments received when the function
//was called.

function countarg(a, b) {
  return arguments.length;
}
console.log(countarg(4, 3));

console.log(countarg.toString());

//Arrow Function which features of ES6

// without Arrow Function

/* const datavar = function (a, b) {
  return a * b;
}; */

const datavar1 = (a, b) => {
  if (a === undefined) {
    a = 4;
  }
  if (b === undefined) {
    b = 2;
  }
  return a * b;
};
console.log(datavar1(8));

//Using The Function Argumentsobject  find the max number;

function MaxFind() {
  let chknum = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (chknum < arguments[i]) {
      chknum = arguments[i];
    }
  }
  return chknum;
}

console.log(MaxFind(10, 30, 65));

let x = myFunction1();
function myFunction1() {
  return this;
}

console.log(x);

//create a function constructor
function funConstructor(arg1, arg2) {
  this.fname = arg1;
  this.lname = arg2;
}

const myObj1 = new funConstructor("payal", "patel");
console.log(typeof myObj1);

// using call method.

const Person = {
  fullname: function () {
    return this.fname + " " + this.lname;
  },
};

const person1 = {
  fname: "payal",
  lname: "patel",
};

const person2 = {
  fname: "shiv",
  lname: "patel",
};

console.log(Person.fullname.call(person2));

//call method with arguments

/* const empdetail = {
  fulldetail: function (city, postcode) {
    return this.fname + " " + this.lname + " " + city + " " + postcode;
  },
};

console.log(empdetail.fulldetail.call(person1, "ahemdabad", 4151)); */
/* The apply() method accepts arguments in
The apply() method is very handy if you want to use an array instead of an argument list
The difference is:
The call() method takes arguments separately.
The apply() method takes arguments as an array.
In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. 
In "non-strict" mode, it becomes the global object */

//apply method with arguments:
const empdetail = {
  fulldetail: function (city, postcode) {
    return this.fname + " " + this.lname + " " + city + " " + postcode;
  },
};

console.log(empdetail.fulldetail.apply(person1, ["ahemdabad", 4151]));

/* JavaScript arrays do not have a max() method, you can apply the Math.max() method instead
to find maximum no */
const maxfind = Math.max.apply(null, [1, 8, 6, 30]);
console.log(maxfind);

/* The variable add is assigned to the return value of a self-invoking function.
The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
A closure is a function having access to the parent scope, even after the parent function has closed.
 */

const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
