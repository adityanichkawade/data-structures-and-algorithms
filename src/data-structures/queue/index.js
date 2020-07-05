class Queue {
  constructor() {
    this.items = [];
  }

  add(data) {
    return this.items.push(data);
  }

  remove() {
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
