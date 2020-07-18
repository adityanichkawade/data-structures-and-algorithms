import {
  equal, ternary, and, notEqual,
} from '../../utils/logic';

const traverse = (aCurrentNode, aCallbackFunc) => {
  let currentNode = aCurrentNode;
  let previousNode = null;
  while (currentNode.getNextNode()) {
    previousNode = currentNode;
    currentNode = currentNode.getNextNode();
    if (and(aCallbackFunc, equal(aCallbackFunc(currentNode, previousNode), true))) { break; }
  }
  return { currentNode, previousNode };
};

/**
 * Function to traverse each node in linked list from the given node
 * @param {LinkedListNode} aNode
 * @param {Function} aCallbackFunc
 */
const traverseNodes = (aCurrentNode, aCallbackFunc) => {
  let currentNode = aCurrentNode; let
    previousNode = null;
  if (and(aCallbackFunc, notEqual(aCallbackFunc(aCurrentNode), true))) {
    const nodes = traverse(aCurrentNode, aCallbackFunc);
    currentNode = nodes.currentNode;
    previousNode = nodes.previousNode;
  }
  return { currentNode, previousNode };
};

/**
 * Function to get last node for the given linked list node
 * @param {LinkedListNode} aNode
 */
const getLastNode = (aNode) => traverseNodes(aNode).currentNode;

/**
 * Function to find the node for given data in linked list
 * @param {LinkedListNode} aNode
 * @param {any} aData
 */
const findNode = (aNode, aData) => {
  const foundNode = traverseNodes(aNode, (aCurrentNode) => equal(aCurrentNode.getData(), aData));
  const { currentNode, previousNode } = foundNode;
  return ternary(currentNode.getData(), aData, { currentNode, previousNode }, null);
};

/**
 * Function to append new node to the linked list
 * @param {LinkedListNode} aCurrentNode
 * @param {LinkedListNode} aNewNode
 */
const appendNode = (aCurrentNode, aNewNode) => {
  let currentNode = aNewNode;
  if (aCurrentNode) {
    currentNode = aCurrentNode;
    const lastNode = getLastNode(aCurrentNode);
    if (lastNode) {
      lastNode.setNextNode(aNewNode);
    }
  }
  return currentNode;
};

/**
 * Function to remove the node for the given data which is provided as parameter
 * @param {LinkedListNode} aNode
 * @param {any} aData
 */
const removeNode = (aNode, aData) => {
  const nodes = findNode(aNode);
  let { currentNode } = nodes;
  const { previousNode } = nodes;

  if (currentNode) {
    if (equal(currentNode.getData(), aData)) {
      currentNode = aNode.getNextNode();
    } else {
      previousNode.setNextNode(currentNode.getNextNode());
      currentNode = previousNode;
    }
  }
  return currentNode;
};

export default {
  getLastNode,
  appendNode,
  removeNode,
};
