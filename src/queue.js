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
    this.list = new ListNode()
  }

  getUnderlyingList() {
    return this.list
  }

  enqueue(value) {
    value = Number(value)
    let item = this.list
    if (!this.list.value) {this.list.value = value;return}
    while (item.next !== null) {
      item = item.next
    }
    const node = new ListNode(value)
    item.next = node
  }

  dequeue() {
    let deleteItemValue = this.list.value
    let item = this.list
    while (item.next) {
      item.value = item.next.value
      item.next = item.next.next
      item = item.next
      if (!item) break
    }
    return deleteItemValue
  }
}

module.exports = {
  Queue
};
