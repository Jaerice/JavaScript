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

// constructor function: template
function Fruit(name, color) {
  this.name = name;
  this.color = color;
  this.display = () => {
    console.log(`${this.name}: ${this.color}`);
  };
  // return this; // you don't need it
}

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
