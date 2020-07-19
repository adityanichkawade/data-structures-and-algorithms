import BinaryTreeNode from './BinaryTreeNode';
import BinaryTreeUtils from '../utils';
/**
 * Class representing binary tree
 */
class BinaryTree {
  constructor(data) {
    this.rootNode = new BinaryTreeNode(data);
  }

  /**
   * Function to add new node to binary tree
   * @param {any} aData
   */
  add(aData) {
    BinaryTreeUtils.addNode(this.rootNode, new BinaryTreeNode(aData));
  }

  /**
   * Function to traverse tree depending upon the type of traversing user want
   * @param {Function} aCallback
   * @param {string} aType - preorder|inorder|postorder
   */
  traverseTree(aCallback, aType) {
    const traversal = {
      preorder: () => {
        BinaryTreeUtils.preOrder(this.rootNode, aCallback);
      },
      inorder: () => {
        BinaryTreeUtils.inOrder(this.rootNode, aCallback);
      },
      postorder: () => {
        BinaryTreeUtils.postOrder(this.rootNode, aCallback);
      },
    };

    const traversalFunc = traversal[aType];
    if (traversalFunc) {
      traversalFunc();
    }
  }

  /**
   * Function to find the node matching the data
   * @param {any} aData
   */
  find(aData) {
    return BinaryTreeUtils.findRecursive(this.rootNode, aData);
  }

  /**
   * Function to find the height of the binary tree
   */
  findHeight() {
    return BinaryTreeUtils.findHeight(this.rootNode);
  }

  /**
   * Function to find the deepest node in binary tree
   */
  findDeepestNode() {
    const level = BinaryTreeUtils.findHeight(this.rootNode);
    return BinaryTreeUtils.findDeepestNodeRecursive(this.rootNode, level);
  }
}

export default BinaryTree;
