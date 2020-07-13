import LinkedListNode from './LinkedListNode';
import LinkedListUtils from './LinkedListUtils';

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  add(data) {
    const newNode = new LinkedListNode(data);
    if (this.headNode) {
      LinkedListUtils.appendNode(this.headNode, newNode);
    } else {
      this.headNode = newNode;
    }
  }
}

export default LinkedList;
