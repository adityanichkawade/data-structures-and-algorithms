/**
 * Utility function to get last node for the given linked list node
 * @param {LinkedListNode} aNode
 */
const getLastNode = (aNode) => {
  let currentNode = aNode;
  while (currentNode.getNextNode()) {
    currentNode = currentNode.getNextNode();
  }
  return currentNode;
};

/**
 * Utility function to append new node to the linked list
 * @param {LinkedListNode} aCurrentNode
 * @param {LinkedListNode} aNewNode
 */
const appendNode = (aCurrentNode, aNewNode) => {
  const lastNode = getLastNode(aCurrentNode);
  if (lastNode) {
    lastNode.setNextNode(aNewNode);
  }
};

export default {
  getLastNode,
  appendNode,
};
