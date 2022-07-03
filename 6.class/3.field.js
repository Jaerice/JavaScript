// 접근 제어자 - 캡슐화
// other language: private, public, protected
// Javascript: private (#)
class Fruit {
  // field (property)
  #name;
  #color;
  #type = 'fruit';
  constructor(name, color) {
    this.#name = name;
    this.#color = color;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#color}`);
  };
}

const apple = new Fruit('apple', 'red');
console.log(apple);
// apple.#name = 'orange'; // #field that cann't access from outside
apple.display();
