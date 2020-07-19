/** LinkedListNode class */
class LinkedListNode {
  /**
   * Creates a node for linked list
   * @param {any} data
   */
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }

  /**
   * Set the next linked node this linked list node
   * @param {LinkedListNode} nextNode
   */
  setNextNode(nextNode) {
    this.nextNode = nextNode;
  }

  /**
   * Set the data for this linked list node
   * @param {any} data
   */
  setData(data) {
    this.data = data;
  }

  /**
   * Returns the next linked node to this current node
   */
  getNextNode() {
    return this.nextNode;
  }
}

export default LinkedListNode;
