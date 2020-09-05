import Queue from '../queue';

class PriorityQueue extends Queue {
  enqueue(aValue, aPriority) {
    this.items.push({ value: aValue, priority: aPriority });
    this.sort();
  }

  sort() {
    this.items.sort((a, b) => a.priority - b.priority);
  }
}

export default PriorityQueue;
