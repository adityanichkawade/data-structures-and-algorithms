// Javascript array has inbuilt methods for stack operation
class Stack {
  constructor() {
    this.items = [];
  }

  peek() {
    return this.items.peek();
  }

  isEmpty() {
    return this.items.length <= 0;
  }

  push(data) {
    return this.items.push(data);
  }

  pop() {
    return this.items.pop();
  }
}

export default Stack;
