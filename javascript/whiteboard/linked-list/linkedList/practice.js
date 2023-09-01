class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

traversal() {
  let current = this.head;
  while (current) {
    current = current.next
  }
}

alternateTraversal() {
  let current = this.head;
  if (!current) return;
  while (current?.next) {
    current = current.next;
  }
  return current;
}

// insert a new item and make it the head
insert(value) {
  const newNode = new Node(value);
  newNode.next = this.head;
  this.head = newNode
}

includes(val) {
  let current = this.head;
  while (current) {
    if (current.value === val) return true;
    current = current.next
  }
  return false;
}

}
