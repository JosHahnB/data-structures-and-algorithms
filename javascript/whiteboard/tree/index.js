class Node {
  constructor(val) {
    this.val = val,
      this.left = null,
      this.right = null,
      this.next = null
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  append(val) {
    let n = new Node(val)
    if (!this.head) { this.head = n }
    else {
      // traverse the list, until we hit the end (no next)
      // the last node's .next is n
    }
  }
}


class Tree {
  constructor() {
    this.root = null;
  }

  insertAfter(val) {
    let newNode = new Node(val);
    if (!this.root) { this.root = newNode; return }
    else {
      this._insert(this.root, newNode)
    }
    // Start at the root
    // If value < root.value then go left and look there ...
    // Otherwise if value > root.value, then go right and look there ...

  }
  _insert = (node, newNode) => {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode
      } else {
        this._insert(node.left, newNode)
      }
    } else if (newNode.value > node.value) {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insert(node.right, newNode)
      }
    }
    // if newNode.value < node.value
    //   if node does not have a left ...
    //      node.left = newNode;
    //   otherwise ...
    //     return _insert( node.left )
    // else if newNode.value > node.value
    //   ... all that stuff but on the .right
    _insert(this.root)
  }

  // inOrder();
  // inOrder( root, [1,2,4,9] );
  inOrder(node = this.root, results = []) {
    // pre-order does the push here ...
    if (node.left) { this.inOrder(node.left, results) }
    results.push(node.val);
    if (node.right) { this.inOrder(node.right, results) }
    // post-order does the push here

    return results
  }
}

let t = new Tree();
t.insert(10);
t.insert(7);
t.insert(9);
t.insert(5);
t.insert(15);

let values = t.inOrder();

console.log(values);
