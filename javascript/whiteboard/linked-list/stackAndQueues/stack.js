class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  toString() {
    if (!this.top) return "NULL";
    let current = this.top;
    let returnStr = '';
    while (current) {
      while (current) {
        returnStr += `{ ${current.value} } -> `;
        current = current.next;
      }
      return returnStr + "NULL"
    }
  }
  // const newNode = new Node(value);
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) throw new Error('no top');
    const temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp;
  }

  peek(value) {
    if (!this.top) throw new Error('no top');
    return this.top.value
  }

  isEmpty() {
    return Boolean(!this.top);
  }
}

module.exports = Stack;
