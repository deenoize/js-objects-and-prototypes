'use strict';

function Cat(name, color) {
    this.name = name;
    this.color = color
}
Cat.prototype.age = 4;

var fluffy = new Cat('Fluffy', 'White');
var muffin = new Cat('Muffin', 'Brown');

fluffy.age = 5;

console.log(fluffy.age); //5
console.log(fluffy.__proto__.age); //4
console.log(muffin.age); //4

console.log(fluffy.hasOwnProperty('age')); //true
console.log(muffin.hasOwnProperty('age')); //false

Cat.prototype = {age: 6}; //create new object in prototype and not changing already created instances

var snowbell = new Cat('Snowbell', 'White');

console.log(snowbell.age); //6
console.log(muffin.age); //4



// _________break_________
// Prototypal Inheritance Chains

function Animal(voice) {
    this.voice = voice || 'grunt';
}

Animal.prototype.speak = function() {
    console.log(this.voice)
};

function Cat(name, color) {
    Animal.call(this, 'Meow'); //first important
    this.name = name;
    this.color = color
}

//second and third important elements in creating prototypal chain
Cat.prototype = Object.create(Animal.prototype); //create prototype from Animal without execute Animal ('new' will execute it)
Cat.prototype.constructor = Cat;

var fluffy = new Cat('Fluffy', 'White');

console.log(fluffy.__proto__); //Cat
console.log(fluffy.__proto__.__proto__); //Animal



// _________break_________
// Prototypal Inheritance Chains using classes

class Animal {
    constructor(voice) {
        this.voice = voice || 'grunt'
    }
    speak() {
        console.log(this.voice)
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super('Meow');
        this.name = name;
        this.color = color
    }
}

var fluffy = new Cat('Fluffy', 'White');