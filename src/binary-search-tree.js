const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add( data ) {
    this.rootNode = addWithin(this.rootNode, data);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }

  has( data ) {
    return searchWithin(this.rootNode, data);

    function searchWithin(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      if (value < node.data) {
        return searchWithin(node.left, value);
      } else {
        return searchWithin(node.right, value);
      }
    }
  }

  find( data ) {
    return findWithin(this.rootNode, data);

    function findWithin(node, value) {
      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        return findWithin(node.left, value);
      } else {
        return findWithin(node.right, value);
      }
    }
  }

  remove( data ) {
    this.rootNode = removeWithin(this.rootNode, data);

    function removeWithin(node, value) {
      if (!node) {
        return null;
      } else if (value > node.data) {
        node.right = removeWithin(node.right, value);
        return node;
      } else if (value < node.data) {
        node.left = removeWithin(node.left, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node.data = node.right.data;
          node.left = node.right.left;
          node.right = node.right.right;
          return node;
        }

        if (!node.right) {
          node.data = node.left.data;
          node.right = node.left.right;
          node.left = node.left.left;
          return node;
        }

        if (node.left && node.right) {
          if (!node.right.left) {
            node.data = node.right.data;
            node.right = node.right.right;
            return node;
          } else {
            let leftmostNode = node.right;
            while (leftmostNode.left) {
              leftmostNode = leftmostNode.left;
            }

            node.data = leftmostNode.data;
            node.right = removeWithin(node.right, leftmostNode.data);

            return node;
          }
        }
      }
    }
  }

  min() {
    if (!this.rootNode) return null;

    let mostLeftNode = this.rootNode;
    while (mostLeftNode.left) {
      mostLeftNode = mostLeftNode.left;
    }

    return mostLeftNode.data;
  }

  max() {
    if (!this.rootNode) return null;

    let mostRightNode = this.rootNode;
    while (mostRightNode.right) {
      mostRightNode = mostRightNode.right;
    }

    return mostRightNode.data;
  }
}

module.exports = {
  BinarySearchTree
};