const Apple = { name: "apple" };
const Banana = { name: "banana" };
const kiwi = { name: "kiwi" };

//create a new Map Object

const fruits = new Map();

//set value in fruits which is map object.

fruits.set(Apple, 400);
fruits.set(Banana, 500);
fruits.set(kiwi, 300);

//console.log(fruits);

//get value of property in object.
//console.log(fruits.get(Apple));

//you can pass array in create map object.
const fruits1 = new Map([
  [Apple, 500],
  [Banana, 400],
  [kiwi, 300],
]);
//console.log(fruits1);

//entries method in map object.
/* console.log(fruits.entries());
console.log(fruits.keys());
console.log(fruits.values());
console.log(fruits.has(Banana)); */

//for each method use

const map = new Map();
map.set("a", 30);
map.set("b", 40);

/* map.forEach((value, key) => {
  console.log("key is " + key + "value is " + value);
});
 */
function display(values, keys) {
  console.log(keys + " " + values);
}

map.forEach(display);
fruits.delete(kiwi);
console.log(fruits);
fruits1.clear();
console.log(fruits1);
