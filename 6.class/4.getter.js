// Accessor Property
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // get, set: 어떤 행동이 아닌 프로퍼티의 일부분으로 특정한 상태를 나타낼때
  // 접근자 프로퍼티 get 이용하면 함수 호출을 속성 호출로 바꿀수 있음
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  // set 할당을 할때 호출됨
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('JaeWook', 'Jung');
console.log(student.firstName);
console.log(student.fullName);
student.fullName = 'Irene';
