const Queue = require("./queue.js");

describe("queues", () => {
  test("can enqueue", () => {
    const q = new Queue();
    q.enqueue(3);
    expect(q.toString()).toBe("{ 3 } -> NULL");
  });
  test("can dequeue", () => {
    const q = new Queue();
    q.enqueue(3);
    q.enqueue(2);
    q.enqueue(1);
    let dQ3 = q.dequeue();
    expect(dQ3.value).toBe(3);
  });


// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Calling dequeue or peek on empty queue raises exception

test('Can successfully instantiate an empty queue', () => {
  expect(new Queue().isEmpty()).toBe(true);
})

test('Can successfully empty a queue after multiple dequeues', () => {
  const test1Queue = new Queue();
  test1Queue.enqueue(3);
  test1Queue.enqueue(2);
  test1Queue.enqueue(1);
  const dequeue3 = test1Queue.dequeue();
  const dequeue2 = test1Queue.dequeue();
  const dequeue1 = test1Queue.dequeue();
  expect(dequeue3.value).toEqual(3);
  expect(dequeue2.value).toEqual(2);
  expect(dequeue1.value).toEqual(1);
  expect(test1Queue.toString()).toEqual('NULL');
})

});
