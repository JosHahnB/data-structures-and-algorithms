class KTreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function traverse() {
  let current = this.root;
  let funQueue = [];
  if (current) funQueue.unshift(current);
  while (funQueue.length) {
    let dequeueNode = funQueue.pop();
    dequeueNode.children.forEach((child) => funQueue.unshift(child))
  }
}

function fizzBuzz(root) {
  if (!root) {
    return null;
  }
  const newRoot = new Node (convertValue(root.value));

  for (const child of root.children) {
    newRoot.children.push(fizzBuzz(child))
  }
  return newRoot;
}

function convertValue(value) {
  if (value % 3 ===0 && value % 5 ===0) {
    return 'FizzBuzz';
  } else if (value % 3 === 0) {
    return 'Fizz';
  } else if (value % 5 ===0) {
    return 'Buzz';
  } else {
    return value.toString();
  }
}
