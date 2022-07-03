// static property, method
class Fruit {
  static MAX_FRUITS = 4;

  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  // keep this for instance level of method
  display = () => {
    console.log(`${this.name}: ${this.color}`);
  };

  // method of class level
  static makeRandomFruit() {
    // you can't reference this in class level method
    return new Fruit('banana', 'green');
  }
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

Math.pow();
Number.isFinite(1);
