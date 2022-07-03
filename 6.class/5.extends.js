// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('Eat!');
//   }
//   sleep() {
//     console.log('sleep!');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('Eat!');
//   }
//   sleep() {
//     console.log('sleep!');
//   }
//   play() {
//     console.log('Play!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('Eat!');
  }
  sleep() {
    console.log('Sleep!');
  }
}

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // super() is called to avoid duplicating color between Animal and Dog class
    this.ownerName = ownerName;
  }
  play() {
    console.log('Play!');
  }
  // overridding: cover the function from parent class
  eat() {
    super.eat(); // diplay: Eat!
    console.log('A dog is eatting!');
  }
}

const dog = new Dog('yellow', 'Jae');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
