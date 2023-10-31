class Node {
  constructor(value) {
    this.value = value;
  }
}

// node: { value: 3 }

class Edge {
  constructor(from, to, weight = null) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const vertex = new Node(value);

    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(startNode, endNode, weight) {

    if (!this.adjacencyList.has(startNode) || !this.adjacencyList.has(endNode))
      throw new Error("invalid verticies");

    let edges = this.adjacencyList.get(startNode);
    const newEdge = new Edge(startNode, endNode, weight);
    edges.push(newEdge);
  }

  addUndirectedEdge(a, b, weight) {
    this.addEdge(a, b, weight);
    this.addEdge(b, a, weight);
  }


  getVerticies() {
    const vertexArray = [];
    this.adjacencyList.forEach((_, key) => vertexArray.push(key.value));
    return vertexArray;
  }

  getNeighbors(vertex) {
    if (!vertex) return;

    const edges = this.getEdges(vertex);
    if (edges) {
      return edges.map((edge) => edge.to);

    } else return null;
  }

  getEdges(vertex) {
    return this.adjacencyList.has(vertex)
      ? this.adjacencyList.get(vertex)
      : null;
  }
  size() {
    return this.adjacencyList.size;
  }

  breadthFirst(Node) {
    if (!Node) return null;
    const result = [];
    const queue = [Node];
    const nodeMap = new Map();

    nodeMap.set(Node, true);
    while (queue.length > 0) {
      let current = queue.shift();
      result.push(current);
      let neighbors = this.getNeighbors(current);
      neighbors.forEach((neighbor) => {
        if (!nodeMap.has(neighbor.to)) {
          nodeMap.set(neighbor.to, true);
          queue.unshift(neighbor.to);
        }
      });
    }
    return result;

  }
}

module.exports = Graph;