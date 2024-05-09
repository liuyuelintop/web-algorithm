function Queue() {
  this.arr = [];
  this.enqueue = (value) => this.arr.push(value);
  this.dequeue = () => this.arr.shift();
}
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.arr);
queue.dequeue();
console.log(queue.arr);
