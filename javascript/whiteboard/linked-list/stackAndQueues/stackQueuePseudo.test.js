const PseudoQueue = require('./stackQueuePseudo.js');

const { expect } = require('chai');
const PseudoQueue = require('./PseudoQueue'); // Replace with the correct path

describe('PseudoQueue', () => {
  it('should enqueue and dequeue elements in the correct order', () => {
    const pseudoQueue = new PseudoQueue();

    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);

    expect(pseudoQueue.dequeue()).to.equal(1);
    expect(pseudoQueue.dequeue()).to.equal(2);

    pseudoQueue.enqueue(4);

    expect(pseudoQueue.dequeue()).to.equal(3);
    expect(pseudoQueue.dequeue()).to.equal(4);
  });

  it('should handle dequeue on an empty queue gracefully', () => {
    const pseudoQueue = new PseudoQueue();

    expect(pseudoQueue.dequeue()).to.be.undefined;
  });

  it('should enqueue and dequeue multiple elements correctly', () => {
    const pseudoQueue = new PseudoQueue();
  });
});