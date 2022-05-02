const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.headNode = null;
  }

  getUnderlyingList() {
    return this.headNode;
  }

  enqueue( value ) {
    let current = this.headNode;

    if (!current) {
      this.headNode = new ListNode(value);
    } else {
      while (current.next) {
        current = current.next;
      }
  
      let newNode = new ListNode (value);
      current.next = newNode;
    }
  }

  dequeue() {
    let current = this.headNode;
    this.headNode = current.next;
    return current.value;
  }
}

module.exports = {
  Queue
};
