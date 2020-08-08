/** Class representing simple unidirectional graph */
class Graph {
  /**
     * Create the graph
     */
  constructor() {
    this.graph = {};
  }

  /**
   * Function to add the node for the graph
   * @param {string} aVertex
   */
  addVertex(aVertex) {
    if (aVertex) {
      this.graph[aVertex] = [];
    }
  }

  checkAndAddEdge(aSourceVertex, aDestinationVertex) {
    if (this.graph[aSourceVertex] && this.graph[aDestinationVertex]) {
      if (!this.graph[aSourceVertex].includes(aDestinationVertex)) {
        this.graph[aSourceVertex].push(aDestinationVertex);
      }
    }
  }

  /**
   * Function to add edge between the graph two vertices
   * @param {string} aVertexOne
   * @param {string} aVertexTwo
   */
  addEdge(aVertexOne, aVertexTwo) {
    this.checkAndAddEdge(aVertexOne, aVertexTwo);
    this.checkAndAddEdge(aVertexTwo, aVertexOne);
  }

  checkAndRemoveEdge(aSourceVertex, aDestinationVertex) {
    if (this.graph[aSourceVertex]) {
      this.graph[aSourceVertex] = this.graph[aSourceVertex]
        .filter((vertex) => vertex !== aDestinationVertex);
    }
  }

  /**
   * Function to remove edge between two vertices
   * @param {string} aVertexOne
   * @param {string} aVertexTwo
   */
  removeEdge(aVertexOne, aVertexTwo) {
    this.checkAndRemoveEdge(aVertexOne, aVertexTwo);
    this.checkAndRemoveEdge(aVertexTwo, aVertexOne);
  }

  /**
   * Function to remove vertex from the graph
   * @param {string} aVertex
   */
  removeVertex(aVertex) {
    if (this.graph[aVertex]) {
      while (this.graph[aVertex].length) {
        const destinationVertex = this.graph[aVertex].pop();
        this.removeEdge(aVertex, destinationVertex);
      }
      delete this.graph[aVertex];
    }
  }

  /**
   * Function to traverse and search the vertices in the graph using depth first search
   * @param {string} aVertex
   */
  depthFirstSearchRecursive(aStartVertex) {
    const result = [];
    const visited = {};
    const { graph } = this;
    (function dfs(aVertex) {
      if (aVertex) {
        visited[aVertex] = true;
        result.push(aVertex);
        graph[aVertex].forEach((aNeighbour) => (
          !visited[aNeighbour] ? dfs(aNeighbour) : null
        ));
      }
      return null;
    }(aStartVertex));

    return result;
  }

  /**
   * Function to do depth first search iteratively
   * @param aStartVertex
   */
  depthFirstSearchIterative(aStartVertex) {
    const stack = [aStartVertex];
    const result = [];
    const visited = {};
    result.push(aStartVertex);
    visited[aStartVertex] = true;

    while (stack.length) {
      const currentVertex = stack.pop();
      result.push(currentVertex);
      this.graph[currentVertex].forEach((aNeighbour) => {
        if (!visited[aNeighbour]) {
          visited[aNeighbour] = true;
          stack.push(aNeighbour);
        }
      });
    }
    return result;
  }

  /**
   * Function to do breath first search
   * @param {string} aStartVertex
   */
  breadthFirstSearch(aStartVertex) {
    const queue = [aStartVertex];
    const result = [];
    const visited = {};

    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);
      this.graph[currentVertex].forEach((aNeighbour) => {
        if (!visited[aNeighbour]) {
          visited[aNeighbour] = true;
          queue.push(aNeighbour);
        }
      });
    }

    return result;
  }
}

export default Graph;
