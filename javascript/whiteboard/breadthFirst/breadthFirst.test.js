const { Queue, Breadth, breadthFirst } = require('./breadthFirst.js');
describe('breadthFirst', () => {
  // Test 1: Basic Tree
  test('traverses a basic tree in breadth-first order', () => {
    const rootNode1 = new TreeNode(1);
    rootNode1.left = new TreeNode(2);
    rootNode1.right = new TreeNode(3);
    rootNode1.left.left = new TreeNode(4);
    rootNode1.left.right = new TreeNode(5);
    rootNode1.right.left = new TreeNode(6);
    rootNode1.right.right = new TreeNode(7);

    const consoleSpy = jest.spyOn(console, 'log');
    breadthFirst(rootNode1);

    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(2);
    expect(consoleSpy).toHaveBeenCalledWith(3);
    expect(consoleSpy).toHaveBeenCalledWith(4);
    expect(consoleSpy).toHaveBeenCalledWith(5);
    expect(consoleSpy).toHaveBeenCalledWith(6);
    expect(consoleSpy).toHaveBeenCalledWith(7);

    consoleSpy.mockRestore();
  });

  // Test 2: Single Node Tree
  test('traverses a single node tree', () => {
    const rootNode2 = new TreeNode(10);

    const consoleSpy = jest.spyOn(console, 'log');
    breadthFirst(rootNode2);

    expect(consoleSpy).toHaveBeenCalledWith(10);

    consoleSpy.mockRestore();
  });

  // Test 3: Skewed Tree
  test('traverses a skewed tree in breadth-first order', () => {
    const rootNode3 = new TreeNode(100);
    rootNode3.left = new TreeNode(200);
    rootNode3.left.left = new TreeNode(300);
    rootNode3.left.left.left = new TreeNode(400);

    const consoleSpy = jest.spyOn(console, 'log');
    breadthFirst(rootNode3);

    expect(consoleSpy).toHaveBeenCalledWith(100);
    expect(consoleSpy).toHaveBeenCalledWith(200);
    expect(consoleSpy).toHaveBeenCalledWith(300);
    expect(consoleSpy).toHaveBeenCalledWith(400);

    consoleSpy.mockRestore();
  });
});
