class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  traversalCheatSheet() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }

  altTraversalCheatSheet() {
    /// return the last node of the list or something... count them??
    let current = this.head;
    if (!current) return;
    while (current?.next) {
      // conditional chaining
      current = current.next;
    }
    return current;
  }

  // insert a new iteam and making it the head
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // includes loops untill current is not truty -- current is null then return false
  includes(val) {
    let current = this.head;
    while (current) {
      if (current.value === val) return true;
      current = current.next;
    }
    return false;
  }

  // toString
  // "{ a } -> { b } -> { c } -> NULL"
  toString() {
    if (!this.head) return "NULL";
    let current = this.head;
    let returnStr = "";
    while (current) {
      // look at the node.value "{ a } -> "
      returnStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    // once we exit the loop we need to tack NULL on to the end
    returnStr += "NULL";
    return returnStr;
  }

  append(newVal) {
    const newNode = new Node(value);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // insertBefore(val, newVal) {
  //   let current = this.head;
  //   while (current) {
  //     if (current.value === val) return true;
  //     current = current.next;
  //     this.append()
  // }
  // return this.head
  // }

  insertBefore(val, newVal) {
    const newNode = new Node(newVal);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    if (this.head.data === val) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === val) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    current.next = newNode;
  }


  insertAfter(val, newVal) {
    const newNode = new Node(newVal);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    if (this.head.data === val) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current) {
      if (current.data === val) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    current.next = newNode;
  }

  kthFromEnd(k) {
    if (k < 0) {
      throw new Error("k must be a non-negative integer.");
    }

    let length = 0;
    let current = this.head;

    while (current) {
      length++;
      current = current.next;
    }

    if (k >= length) {
      throw new Error("The list does not have k nodes.");
    }
    current = this.head;
    for (let i = 0; i < length - k - 1; i++) {
      current = current.next;
    }
    return current.value;
  }

  zipLists(list1, list2) {
    const zippedList = new LinkedList();

    // Create two temps, one for each linked list.
    let temp1 = list1.head;
    let temp2 = list2.head;

    // Iterate through the two linked lists
    while (temp1 && temp2) {
      zippedList.addNode(temp1.data);
      zippedList.addNode(temp2.data);
      temp1 = temp1.next;
      temp2 = temp2.next;
    }
    return zippedList;
  }
}


module.exports = { LinkedList, Node };
