const empDetail = {
  fname: "payal",
  lname: "patel",
  age: 0,
};

//add property in object using Object.defineproperty
Object.defineProperty(empDetail, "postcode", {
  value: 4151,
});

//Using Object.defineproperty change value
Object.defineProperty(empDetail, "age", {
  value: 35,
});
//console.log(empDetail.age);

//Using Object.defineproperty change metadata like writeble enumarble.
Object.defineProperty(empDetail, "age", {
  writable: false,
});
//empDetail.age = 45;
//console.log(empDetail.age);

Object.defineProperty(empDetail, "lname", {
  enumerable: false,
});

//for (let x in empDetail) {
//console.log(empDetail[x]);
//}

//using getter and setter in object define property
Object.defineProperty(empDetail, "fullname", {
  get: function () {
    return empDetail.fname + " " + empDetail.lname;
  },

  set: function (value) {
    const parts = value.split(" ");
    this.fname = parts[0];
    this.lname = parts[1];
  },
});

empDetail.fullname = "K T";
console.log(empDetail.fullname);
console.log(empDetail);

//using object.getownproperty to get all property name:
console.log(Object.getOwnPropertyNames(empDetail));

//using Object.key() get property name which enumerble is true only
console.log(Object.keys(empDetail));
