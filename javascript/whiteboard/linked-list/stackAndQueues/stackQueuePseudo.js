class PseudoQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack1.length === 0 && this.stack2.length === 0) {
      console.log('Queue is empty');
      return undefined;
    }

    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        const poppedValue = this.stack1.pop();
        this.stack2.push(poppedValue);
      }
    }

    const dequeuedValue = this.stack2.pop();
    console.log(`Dequeued: ${dequeuedValue}`);
    return dequeuedValue;
  }
}

module.exports = PseudoQueue