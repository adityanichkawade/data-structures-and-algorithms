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

  findMaxRecursive(node) {
    const max = Number.NEGATIVE_INFINITY;
    return (node)
      ? Math.max(max,
        node.data,
        this.findMaxRecursive(node.leftNode),
        this.findMaxRecursive(node.rightNode))
      : max;
  }

  findMax() {
    return this.findMaxRecursive(this.rootNode);
  }

  findNodeRecursive(node, data) {
    if (!node) {
      return null;
    }
    if (node.data === data) {
      return node;
    }
    return this.findNodeRecursive(node.leftNode, data)
    || this.findNodeRecursive(node.rightNode, data);
  }

  find(data) {
    return this.findRecursive(this.rootNode, data);
  }

  findHeightRecursive(node) {
    let leftHeight = 0; let
      rightHeight = 0;
    if (!node) {
      return 0;
    }
    leftHeight = this.findHeightRecursive(node.leftNode);
    rightHeight = this.findHeightRecursive(node.rightNode);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  findHeight() {
    return this.findHeightRecursive(this.rootNode);
  }

  findDeepestNodeRecursive(node, level) {
    const deepestNode = node;
    if (!deepestNode) {
      return null;
    }

    if (level === 1) {
      return deepestNode;
    }

    return (level > 1)
      ? this.findDeepestNodeRecursive(node.leftNode, level - 1)
      || this.findDeepestNodeRecursive(node.rightNode, level - 1)
      : deepestNode;
  }

  findDeepestNode() {
    const level = this.findHeight(this.rootNode);
    return this.findDeepestNodeRecursive(this.rootNode, level);
  }
}

export default BinaryTree;
