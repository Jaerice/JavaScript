// ceate employee
class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class Fulltime extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, Fulltime.PAY_RATE);
  }
}

class Parttime extends Employee {
  static PAY_RATE = 8000; // static: class level
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, Parttime.PAY_RATE);
  }
}

const employee1 = new Fulltime('Jae', 'Software Enginner', 10);
const employee2 = new Parttime('Dave', 'Cerpanter', 10);
console.log(employee1.calculatePay());
console.log(employee2.calculatePay());
