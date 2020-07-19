import LinkedListNode from './LinkedListNode';
import LinkedListUtils from './LinkedListUtils';

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  /**
   * Function to append new node for the linked list
   * @param {any} aData
   */
  add(aData) {
    this.headNode = LinkedListUtils.appendNode(this.headNode, new LinkedListNode(aData));
  }

  /**
   * Function to remove node from linked list matching the data passed as parameter
   * @param {any} aData
   */
  remove(aData) {
    this.headNode = LinkedListUtils.removeNode(this.headNode, aData);
  }

  /**
   * Function to find the node matching data passed as parameter
   * @param {any} aData
   */
  find(aData) {
    const { currentNode } = LinkedListUtils.findNode(this.headNode, aData);
    return currentNode;
  }

  /**
   * Function to find the length of the linked list
   */
  getLength() {
    return LinkedListUtils.getLength(this.headNode);
  }
}

export default LinkedList;
