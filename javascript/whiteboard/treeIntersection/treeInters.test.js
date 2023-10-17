const { Node, BinaryTree, tree_intersection } = require('./treeIntersection.js');

describe('BinaryTree Insert Method', () => {
  test('Inserting values in a tree with multiple levels', () => {
    const tree = new BinaryTree();
    tree.insert(5);
    tree.insert(2);
    tree.insert(8);
    tree.insert(1);

    // Assertions
    expect(tree.root.value).toBe(5);
    expect(tree.root.left.value).toBe(2);
    expect(tree.root.right.value).toBe(8);
    expect(tree.root.left.left.value).toBe(1);
  });

  test('Inserting values in a tree with one level', () => {
    const tree = new BinaryTree();
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);

    // Assertions
    expect(tree.root.value).toBe(1);
    expect(tree.root.right.value).toBe(2);
    expect(tree.root.right.right.value).toBe(3);
  });

  test('Inserting values in a tree with varying levels', () => {
    const tree = new BinaryTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(12);

    // Assertions
    expect(tree.root.value).toBe(10);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.value).toBe(15);
    expect(tree.root.right.left.value).toBe(12);
  });
});

describe('tree_intersection Function', () => {
  test('Finding common values in two trees with multiple common values', () => {
    const tree1 = new BinaryTree();
    tree1.insert(4);
    tree1.insert(2);
    tree1.insert(1);
    tree1.insert(3);
    tree1.insert(7);
    tree1.insert(6);
    tree1.insert(9);

    const tree2 = new BinaryTree();
    tree2.insert(4);
    tree2.insert(2);
    tree2.insert(1);
    tree2.insert(3);
    tree2.insert(7);
    tree2.insert(6);
    tree2.insert(10);

    const commonValues = tree_intersection(tree1, tree2);

    // Assertions
    expect(commonValues.length).toBe(6);
    expect(commonValues).toContain(1);
    expect(commonValues).toContain(2);
    expect(commonValues).toContain(3);
  });

  test('Finding common values in two trees with fewer common values', () => {
    const tree1 = new BinaryTree();
    tree1.insert(1);
    tree1.insert(2);
    tree1.insert(3);

    const tree2 = new BinaryTree();
    tree2.insert(2);
    tree2.insert(3);
    tree2.insert(4);

    const commonValues = tree_intersection(tree1, tree2);

    // Assertions
    expect(commonValues.length).toBe(2);
    expect(commonValues).toContain(2);
    expect(commonValues).toContain(3);
  });

});