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
}

export default Graph;
