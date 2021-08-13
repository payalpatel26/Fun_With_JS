/* in Polymorphism parent and child have same method so bydefault child method call but 
if we want to call parentmethod by child instance by super 
 */

class Animal {
  constructor(_name) {
    this.name = _name;
  }

  makesound() {
    console.log("we have animal sound.");
  }
}

class Dog extends Animal {
  constructor(_name) {
    super(_name);
  }

  makesound() {
    super.makesound();
    console.log("wolf wolf!!");
  }
}

const d1 = new Dog("garfield");
d1.makesound();
