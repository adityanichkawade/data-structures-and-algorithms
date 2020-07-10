import BinaryTreeNode from './BinaryTreeNode';

function getCorrectNode(node, newNode) {
  return newNode.data < node.data ? node.leftNode : node.rightNode;
}

function setCorrectNode(node, newNode) {
  if (node.data > newNode.data) {
    node.setLeft(newNode);
  } else {
    node.setRight(newNode);
  }
}

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
    const correctNode = getCorrectNode(node, newNode);
    if (correctNode) {
      this.addNode(correctNode, newNode);
    } else {
      setCorrectNode(node, newNode);
    }
  }

  traverseTree(callback, type) {
    const traversal = {
      PreOrder: () => {
        this.preOrder(this.rootNode, callback);
      },
      InOrder: () => {
        this.inOrder(this.rootNode, callback);
      },
      PostOrder: () => {
        this.postOrder(this.rootNode, callback);
      },
    };

    const traversalFunc = traversal[type];
    if (traversalFunc) {
      traversalFunc();
    }
  }

  preOrder(root, callback) {
    if (root) {
      callback(root);
      this.preOrder(root.leftNode);
      this.preOrder(root.rightNode);
    }
  }

  inOrder(root, callback) {
    if (root) {
      this.inOrder(root.leftNode);
      callback(root);
      this.inOrder(root.rightNode);
    }
  }

  postOrder(root, callback) {
    if (root) {
      this.postOrder(root.leftNode);
      this.postOrder(root.rightNode);
      callback(root);
    }
  }
}

export default BinaryTree;
