const { BinaryTree, TreeNode } = require('./tree-max.js');

describe('BinaryTree', () => {
  it('should find the maximum value in a binary tree', () => {
    const tree1 = new BinaryTree();
    tree1.root = new TreeNode(10);
    tree1.root.left = new TreeNode(5);
    tree1.root.right = new TreeNode(15);
    tree1.root.left.left = new TreeNode(3);
    tree1.root.left.right = new TreeNode(8);
    tree1.root.right.right = new TreeNode(20);
    

    expect(tree1.findMaxValue()).to.equal(20);

    const tree2 = new BinaryTree();
    tree2.root = new TreeNode(7);
    tree2.root.left = new TreeNode(2);
    tree2.root.right = new TreeNode(9);
    tree2.root.left.left = new TreeNode(1);
    tree2.root.left.right = new TreeNode(5);

    expect(tree2.findMaxValue()).to.equal(9);
  });

  it('should handle an empty tree gracefully', () => {
    const emptyTree = new BinaryTree();
    expect(emptyTree.findMaxValue()).to.equal(Number.NEGATIVE_INFINITY);
  });
});
