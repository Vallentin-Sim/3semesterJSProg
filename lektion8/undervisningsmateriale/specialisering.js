// specialisering.js
class Person {
    constructor(navn) {
        this.navn = navn;
    }
    toString() { return this.navn; }
    // TODO Skal ændres
    equals(other) {
        if (Person.prototype.compare.call(this, other) === 0) {
            return true;
        }
        return false;
    }
    // TODO Skal ændres
    compare(other) {
        if (this.navn < other.navn) {
            return -1;
        } else if (this.navn > other.navn) {
            return 1;
        } else {
            return 0;
        }
    }
}
class Studerende extends Person {
    constructor(navn, id) {
        super(navn);
        this.id = id;
    }
    toString() { return super.toString() + ": " + this.id; };
}
let person = new Person("Viggo");
let studerende = new Studerende("Ida", 123);
console.log(person instanceof Person); // => true
console.log(person instanceof Studerende); // => false
console.log(studerende instanceof Person); // => true
console.log(studerende instanceof Studerende); // => true
