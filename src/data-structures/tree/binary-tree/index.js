import BinaryTreeNode from './BinaryTreeNode';

class BinaryTree {
  constructor(data) {
    this.rootNode = new BinaryTreeNode(data);
  }

  add(data) {
    const newNode = new BinaryTreeNode(data);
    if (this.rootNode) {
      this.addNode(this.root, newNode);
    } else {
      this.rootNode = newNode;
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.leftNode) {
        this.addNode(node.leftNode, newNode);
      } else {
        node.setLeft(newNode);
      }
    } else if (node.rightNode) {
      this.addNode(node.rightNode, newNode);
    } else {
      node.setRight(newNode);
    }
  }
}

export default BinaryTree;
