'use strict';

 var cat = {
     name: {first: 'Fluffy', last: 'LaBeouf'},
     color: 'White'
 };

// Writable attribute

Object.defineProperty(cat, 'name', {writable: false}); // Protect from writing name, but not inner object
Object.freeze(cat.name); // Prevent changing inner objects of name
cat.name.first = 'Scratchy'; // This will throw TypeError
console.log(cat.name);

// Enumerable attribute

Object.defineProperty(cat, 'name', {enumerable: false});

for (var propertyName in cat) {
    console.log(propertyName + ': ' + cat[propertyName]); // Will return only color
}
console.log(Object.keys(cat)); // Same will return only color
console.log(JSON.stringify(cat)); // And again will return only color

// Configurable attribute

Object.defineProperty(cat, 'name', {configurable: false});
Object.defineProperty(cat, 'name', {enumerable: false}); //This will throw an error, unconfigurable

// Getters and Setters

Object.defineProperty(cat, 'fullName', {
    get: function() {
        return this.name.first + ' ' + this.name.last
    },
    set: function(value) {
        var nameParts = value.split(' ');
        this.name.first = nameParts[0];
        this.name.last = nameParts[1]
    }
})

cat.fullName = 'Muffin Top';
console.log(cat.fullName); // Muffin Top
console.log(cat.name.first); // Muffin
console.log(cat.name.last); //Top