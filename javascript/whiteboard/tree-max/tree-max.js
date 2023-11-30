export class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  constructor() {
    this.root = null;
  }

  findMaxValue() {
    const traverse = (node, maxValue) => {
      if (node === null) {
        return maxValue;
      }

      maxValue = Math.max(maxValue, node.value);

      maxValue = traverse(node.left, maxValue);
      maxValue = traverse(node.right, maxValue);

      return maxValue;
    };

    return traverse(this.root, Number.NEGATIVE_INFINITY);
  }
}


