// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: red`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: yellow`);
//   },
// };

// How to make code from above to simply?

// class
class Fruit {
  // constructor: function called when creating objects with new keywords
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  // display () { ... }
  display = () => {
    console.log(`${this.name}: ${this.color}`);
  };
}

// apple is an instance of a Fruit class
const apple = new Fruit('apple', 'red');
const orange = new Fruit('orange', 'yellow');

console.log(apple);
console.log(apple.name);
console.log(apple.color);
apple.display();
console.log(orange);
console.log(orange.name);
console.log(orange.color);
orange.display();

// this is just an object
const obj = { name: 'ellie' };
