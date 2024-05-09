function Stack() {
  this.arr = [];
  this.push = (value) => this.arr.push(value);
  this.pop = () => this.arr.pop();
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.arr);
stack.pop();
console.log(stack.arr);
