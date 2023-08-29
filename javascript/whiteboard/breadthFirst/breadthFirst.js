class Queue {
  constructor() {
    this.itemArr = [];
  }

  enqueue(item) {
    this.itemArr.push(item)
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.itemArr.shift()
  }

  isEmpty() {
    return this.itemArr.length === 0;
  }
}
class Breadth {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function breadthFirst(root) {
  const breadth = new Queue();
  breadth.enqueue(root);

  while (!breadth.isEmpty()) {
    const front = breadth.dequeue();
    console.log(front.value);

    if (front.left !== null) {
      breadth.enqueue(front.left)
    }
    if (front.right !== null) {
      breadth.enqueue(front.right)
    }
  }
}

module.exports = { Queue, Breadth }
