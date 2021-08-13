class empPersonalDes {
  constructor(fname, lname) {
    (this.fname = fname), (this.lname = lname);
  }

  fullName() {
    return this.fname + " " + this.lname;
  }
}

class empSalary extends empPersonalDes {
  constructor(fname, lname, gslaary) {
    super(fname, lname);
    this.gslaary = gslaary;
  }
  //create a method to count basic
  countbasic() {
    let baisc = (this.gslaary * 70) / 100;
    return baisc;
  }

  //to cout Hra With get and set

  get Hra() {
    return (this._hra = (this.gslaary * 10) / 100);
  }

  set Hra(value) {
    this._hra = value;
  }

  //use static method compare grosssalary by two object.

  static comparegs(a, b) {
    return a.gslaary == b.gslaary ? true : false;
  }

  // use static method with comapare two parameter.

  static comphra(hra1, hra2) {
    return hra1 > hra2;
  }

  display() {
    console.log(
      super.fullName() + " is a basic of salary " + this.countbasic()
    );
    console.log(super.fullName() + " is a basic of salary " + this._hra);
  }
}

//const epd = new empPersonalDes("payal", "patel");
const gs = new empSalary("shiv", "patel", 90000);
const gs1 = new empSalary("anav", "patel", 90000);
/* console.log(gs.fullName());
console.log(gs.Hra);
gs.Hra = 10000;
console.log(gs.display());
 */
console.log(empSalary.comparegs(gs, gs1));
console.log(empSalary.comphra(40000, 30000));
