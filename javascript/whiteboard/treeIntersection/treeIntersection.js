'use strict'

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
}


function tree_intersection(tree1, tree2) {
  const setValue = new Set();

  const traversal = (node, hashmap) => {
    if (node) {
      hashmap[node.value] = true;
      traversal(node.left, hashmap);
      traversal(node.right, hashmap);
    }
  };
  const hashmap = {};
  traversal(tree1.root, hashmap);

  const findIdentical = (node) => {
    if (node) {
      if (hashmap[node.value]) {
        setValue.add(node.value);
      }
      findIdentical(node.left);
      findIdentical(node.right)
    }
  };
  findIdentical(tree2.root)
  return Array.from(setValue)
}

module.exports = { Node, BinaryTree, tree_intersection };