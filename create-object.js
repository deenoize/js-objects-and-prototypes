'use strict';

// Simple object

var cat = {
    name: 'Fluffy',
    color: 'White',
    speak: function () {
        console.log("Meeoow");
    }
};
cat.speak();

// Object with Object.create function

var cow = Object.create(Object.prototype,
    {
        name: {
            value: 'Flaffy',
            enumerable: true,
            writable: true,
            configurable: true
        }
    }
);

// Object with Constructor

function Dog(name, color) {
    this.name = name;
    this.color = color;
}

var dog = new Dog('Fluffy', 'White');
console.log(dog.color);

// ES6 Class (same as constructor)

class Pig {
    constructor(name, color) {
        this.name = name;
        this.color = color
    }

    speak() {
        console.log('Hrummm')
    }
}

var pig = new Pig('Fluffy', 'White');
pig.speak();