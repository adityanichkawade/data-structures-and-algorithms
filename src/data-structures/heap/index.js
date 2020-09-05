class Heap {
  constructor() {
    this.reset();
  }

  /**
   * Function to reset the heap properties
   */
  reset() {
    this.array = [];
    this.count = 0;
    this.capacity = [];
  }

  /**
   * Function to create the heap
   * @param {number} capacity
   */
  createHeap(capacity) {
    this.capacity = capacity;
    this.count = 0;
    this.array = [];
  }

  /**
   * Function to get the parent index for the current element index of the heap
   * @param {number} i
   */
  getParentIndex(i) {
    return i <= 0 || i >= this.count ? -1 : Math.floor(i / 2);
  }

  /**
   * Function to get the left child index of the current index of the heap
   * @param {number} i
   */
  getLeftChildIndex(i) {
    const left = 2 * i;
    return left >= this.count ? -1 : left;
  }

  /**
   * Function to get the right child index of the current index of the heap
   * @param {*} i
   */
  getRightChildIndex(i) {
    const right = 2 * i + 1;
    return right >= this.count ? -1 : right;
  }

  /**
   * Function to get the maximum element of the heap
   */
  getMaximum() {
    return this.count === 0 ? -1 : this.array[0];
  }

  percolateDown(i) {
    const leftChildIndex = this.getLeftChildIndex(i);
    const rightChildIndex = this.getRightChildIndex(i);
    let max;

    if (leftChildIndex !== -1 && this.array[leftChildIndex] > this.array[i]) {
      max = leftChildIndex;
    } else {
      max = i;
    }

    if (
      rightChildIndex !== -1 &&
      this.array[rightChildIndex] > this.array[max]
    ) {
      max = rightChildIndex;
    }

    if (max !== i) {
      const temp = this.array[i];
      this.array[i] = this.array[max];
      this.array[max] = temp;
    }

    this.percolateDown(max);
  }

  deleteMax() {
    if (this.count === 0) {
      return -1;
    }
    const data = this.array[0];
    this.count -= 1;
    this.percolateDown(0);
    return data;
  }

  insert(data) {
    if (this.count === this.capacity) {
      this.resizeHeap();
    }
    this.count += 1;
    let i = this.count - 1;
    while (i >= 0 && data > this.array[(i - 1) / 2]) {
      this.array[i] = this.array[(i - 1) / 2];
      i = Math.floor(i / 2);
    }
    this.array[i] = data;
  }

  resizeHeap() {
    this.capacity *= 2;
  }

  buildHeap(arr) {
    const n = arr.length;
    while (n > this.capacity) {
      this.resizeHeap();
    }

    for (let i = 0; i < n; i += 1) {
      this.array[i] = arr[i];
    }
    this.count = n;
    const startIndex = Math.floor((n - 1) / 2);
    for (let i = startIndex; i >= 0; i -= 1) {
      this.percolateDown(i);
    }
  }

  heapSort(arr) {
    this.createHeap(arr.length);
    this.buildHeap(arr);
    const oldSize = this.count;
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const temp = this.array[0];
      this.array[0] = this.array[this.count - 1];
      this.array[0] = temp;
      this.count -= 1;
      this.percolateDown(0);
    }
    this.count = oldSize;
  }
}

export default Heap;
