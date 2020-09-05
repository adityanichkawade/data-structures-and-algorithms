class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(data) {
    return this.items.push(data);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.isEmpty() ? null : this.items[0];
  }

  isEmpty() {
    return this.items.length <= 0;
  }
}

export default Queue;
