import Graph from '../graph';
import PriorityQueue from '../../queues/priority-queue';

class WeightedGraph extends Graph {
/**
 * Function to add edge between two vertext specified as parameter
 * @param {string} aVertexOne
 * @param {string} aVertexTwo
 * @param {number} aWeight
 */
  addEdge(aVertexOne, aVertexTwo, aWeight) {
    if (this.graph[aVertexOne] && this.graph[aVertexTwo] && typeof aWeight === 'number') {
      this.graph[aVertexOne].push({ vertex: aVertexTwo, weight: aWeight });
      this.graph[aVertexTwo].push({ vertex: aVertexOne, weight: aWeight });
    }
  }

  Dijkstra(aStart, aFinish) {
    const vertices = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    const { graph } = this;
    let remainingSmallest;
    Object.keys(graph).forEach((vertex) => {
      if (vertex === aStart) {
        distances[vertex] = 0;
        vertices.enqueue(vertex, 0);
      } else {
        distances[vertex] = Number.POSITIVE_INFINITY;
        vertices.enqueue(vertex, Number.POSITIVE_INFINITY);
      }
      previous[vertex] = null;
    });

    while (!vertices.isEmpty()) {
      let smallest = vertices.dequeue().value;
      remainingSmallest = smallest;
      if (smallest === aFinish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Number.POSITIVE_INFINITY) {
        Object.keys(graph[smallest]).forEach((aNeighbourVertex) => {
          const nextVertex = graph[smallest][aNeighbourVertex];
          const candidate = distances[smallest] + nextVertex.weight;
          const nextNeighbourVertex = nextVertex.vertex;
          if (candidate < distances[nextNeighbourVertex]) {
            distances[nextNeighbourVertex] = candidate;
            previous[nextNeighbourVertex] = smallest;
            vertices.enqueue(nextNeighbourVertex, candidate);
          }
        });
      }
    }

    return path.concat(remainingSmallest).reverse();
  }
}

export default WeightedGraph;
