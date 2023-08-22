class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor(front = null) {
    this.front = front;
    this.rear = null;
  }

  isEmpty() {
    return this.front ? false : true
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode
      this.rear = newNode;
      return
    }
    this.rear.next = newNode;
    this.rear=newNode;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error('no front');
    const current = this.front;
    this.front = current.next;
    current.next = null;
    return current;
  }

  peek() {
    if (this.isEmpty()) throw new Error('no front')
    return this.front.value;
  }

  toString() {
    if (this.isEmpty()) return "NULL";
    let current = this.front;
    let returnStr = '';
    while (current) {
      while (current) {
        returnStr += `{ ${current.value} } -> `;
        current = current.next;
      }
      return returnStr + "NULL"
    }
  }


}

module.exports = Queue;
