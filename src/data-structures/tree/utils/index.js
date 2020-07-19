import {
  ternary, greaterThan, equal, or,
} from '../../../utils/logic';
import BinaryTreeNode from '../binary-tree/BinaryTreeNode';

/**
 * Function to get the left node or right node for binary tree depending upon the
 * data of the new node and data of the current node comparision
 * @param {BinaryTreeNode} node
 * @param {BinaryTreeNode} newNode
 */
const getCorrectNode = (aNode, aNewNode) => (
  ternary(
    greaterThan(aNode.getData(), aNewNode.getData()),
    aNewNode.getRightNode(), aNewNode.getLeftNode(),
  )
);

/**
 * Function to set new node to given node if value is less than current node
 * then set it as left child else set it as right child
 * @param {BinaryTreeNode} aNode
 * @param {BinaryTreeNode} aNewNode
 */
const setCorrectNode = (aNode, aNewNode) => {
  if (greaterThan(aNode.getData(), aNewNode.getData())) {
    aNode.setLeftNode(aNewNode);
  } else {
    aNode.setRightNode(aNewNode);
  }
};

/**
 * Function to add new node as child node to current node passed as parameter
 * @param {BinaryTreeNode} aNode
 * @param {BinaryTreeNode} aNewNode
 */
const addNode = (aNode, aNewNode) => {
  const correctNode = getCorrectNode(aNode, aNewNode);
  if (correctNode) {
    addNode(correctNode, aNewNode);
  } else {
    setCorrectNode(aNode, aNewNode);
  }
};

/**
 * Function to pre-order traverse binary tree
 * @param {BinaryTreeNode} aRoot
 * @param {BinaryTreeNode} aCallback
 */
const preOrder = (aRoot, aCallback) => {
  if (aRoot) {
    aCallback(aRoot);
    preOrder(aRoot.getLeftNode(), aCallback);
    preOrder(aRoot.getRightNode(), aCallback);
  }
};

/**
 * Function to in-order traverse binary tree
 * @param {BinaryTreeNode} aRoot
 * @param {BinaryTreeNode} aCallback
 */
const inOrder = (aRoot, aCallback) => {
  if (aRoot) {
    inOrder(aRoot.getLeftNode(), aCallback);
    aCallback(aRoot);
    inOrder(aRoot.getRightNode(), aCallback);
  }
};

/**
 * Function to post-order traverse binary tree
 * @param {BinaryTreeNode} aRoot
 * @param {BinaryTreeNode} aCallback
 */
const postOrder = (aRoot, aCallback) => {
  if (aRoot) {
    postOrder(aRoot.getLeftNode());
    postOrder(aRoot.getRightNode());
    aCallback(aRoot);
  }
};

/**
 * Function to find node with maximum value in binary tree
 * @param {BinaryTreeNode} aNode
 */
const findMax = (aNode) => {
  const max = Number.NEGATIVE_INFINITY;
  return (aNode)
    ? Math.max(max,
      aNode.getData(),
      findMax(aNode.getLeftNode()),
      findMax(aNode.getRightNode()))
    : max;
};

/**
 * Function to find node in binary tree matching the data
 * @param {BinaryTreeNode} aNode
 * @param {BinaryTreeNode} aData
 */
const findNode = (aNode, aData) => {
  if (aNode) {
    return (
      ternary(
        equal(aNode.getData(), aData), aNode,
        or(findNode(aNode.getLeftNode(), aData), findNode(aNode.getRightNode, aData)),
      )
    );
  }
  return null;
};

/**
 * Function to find height of the binary tree
 * @param {BinaryTreeNode} aNode
 */
const findHeight = (aNode) => (
  (aNode) ? Math.max(findHeight(aNode.getLeftNode()), findHeight(aNode.getRightNode())) + 1 : 0
);

/**
 * Function to find the deepest node in binary tree
 * @param {BinaryTreeNode} aNode
 * @param {BinaryTreeNode} aLevel
 */
const findDeepestNode = (aNode, aLevel) => {
  const deepestNode = aNode;
  if (deepestNode) {
    return (equal(aLevel, 1)) ? deepestNode
      : ternary(
        greaterThan(aLevel, 1),
        or(findDeepestNode(aNode.getLeftNode(), aLevel - 1),
          findDeepestNode(aNode.getRightNode(), aLevel - 1)),
        deepestNode,
      );
  }
  return null;
};

export default {
  getCorrectNode,
  setCorrectNode,
  addNode,
  preOrder,
  inOrder,
  postOrder,
  findMax,
  findNode,
  findHeight,
  findDeepestNode,
};
