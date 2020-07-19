/**
 * Class representing binary tree node
 */
class BinaryTreeNode {
  constructor(data) {
    this.leftNode = null;
    this.rightNode = null;
    this.data = data;
  }

  /**
   * Function to sete the left node for the current binary node
   * @param {BinaryTreeNode} newNode
   */
  setLeftNode(aNode) {
    this.leftNode = aNode;
  }

  /**
   * Function to set the right node for the current binary node
   * @param {BinaryTreeNode} newNode
   */
  setRightNode(newNode) {
    this.rightNode = newNode;
  }

  /**
   * Function to get the left node of the current node
   */
  getLeftNode() {
    return this.leftNode;
  }

  /**
   * Function to get the right node of the current node
   */
  getRightNode() {
    return this.rightNode;
  }

  /**
   * Function to get the data for the current node
   */
  getData() {
    return this.data;
  }
}

export default BinaryTreeNode;
