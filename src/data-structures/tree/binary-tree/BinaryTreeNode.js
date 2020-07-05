class BinaryTreeNode {
  constructor(data) {
    this.leftNode = null;
    this.rightNode = null;
    this.data = data;
  }

  setLeft(newNode) {
    this.leftNode = newNode;
  }

  setRight(newNode) {
    this.rightNode = newNode;
  }
}

export default BinaryTreeNode;
