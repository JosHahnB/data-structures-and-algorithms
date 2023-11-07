class Graph {
  constructor() {
    this.nodes = [];
    this.adjacent = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacent[node] = [];
  }

  addEdge(node1, node2) {
    this.adjacent[node1].push(node2);
    this.adjacent[node2].push(node1);
  }

  depthFirst(startNode) {
    const visited = new Set();
    const result = [];

    const dfs = (node) => {
      visited.add(node);
      result.push(node);

      this.adjacent[node].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      });
    };

    dfs(startNode);

    return result;
  }
}