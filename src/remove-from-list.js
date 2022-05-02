const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( l, k ) {
  let current = l;
  let elementToRemoved = null;
  let nextMatchingElement = null;

  while (current.value === k) {
    elementToRemoved = current;
    current = current.next;
    elementToRemoved.next = null;
  }

  let head = current;

  while(current.next) {
    if (current.next.value === k) {
      elementToRemoved = current.next;
      if (current.next.next) {
        nextMatchingElement = current.next.next;
      } else {
        current.next = null;
        break;
      }
      while (nextMatchingElement.value === k) {
        nextMatchingElement = nextMatchingElement.next;
      }
      current.next = nextMatchingElement;
      elementToRemoved.next = null;
    }
    current = current.next;
  }

  return head;
}

module.exports = {
  removeKFromList
};
