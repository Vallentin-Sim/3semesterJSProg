// Lav et array med en række person objekter
// Hver person skal have et navn, en e-mail og et mobilnummer.
// Afprøv CRUD på dette array som vist på siden CRUD på arrays i lektionens slides.

let person1 = {navn: 'Anton', 'email': 'antons@mail.com', mobilnummer: 12345678};
let person2 = {navn: 'Bob', 'email': 'bobber@mailers.dk', mobilnummer: 12481632};
let person3 = {navn: 'Anton', 'email': 'antons@mail.com', mobilnummer: 101010101};
let person4 = {navn: 'Anton', 'email': 'antons@mail.com', mobilnummer: 99999999};

personer = [person1, person2, person3, person4];
console.log(personer);

delete personer[2];
console.log(personer);

let person5 = {navn: 'Claus', 'email': 'wololo@memelover.com', mobilnummer: 55555555};
personer[2] = person5;
console.log(personer);
