class calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.operation = operation.toLowerCase();
  }
  calculate() {
    switch (this.operation) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        if (this.b === 0) {
          return "error";
        }
        return this.a / this.b;
      default:
        return "error";
    }
  }
}

const cacl1 = new calculator(10, 10, "add");
console.log(cacl1.calculate())