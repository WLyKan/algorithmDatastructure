// 图
// @author:King. Date:2019-02-20 14:18
import Dictionary from './dictionary'

class Graph {
    constructor() {
        this.vertices = []
        this.adjList = new Dictionary()
    }

    addVertex(v) {
        this.vertices.push(v)
        this.adjList.set(v, [])
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }

    toString() {
        return this.vertices.reduce((r, v, i) => {
            return this.adjList.get(v).reduce((r, w, i) => {
                return `${r}${w}`
            }, `${r}\n${v}`)
        }, '')
    }

    // 广度优先搜索
    bfs(v, callback) {
        const read = []
        const distances = []
        const predecessors = []
        const adjList = this.adjList
        const pending = [v || this.vertices[0]]
        const readVertices = (vertices) => {
            vertices.forEach((key) => {
                read.push(key)
                pending.shift()
                distances[key] = distances[key] || 0
                predecessors[key] = predecessors[key] || null
                adjList.get(key).forEach((v) => {
                    if (!pending.includes(v) && !read.includes(v)) {
                        pending.push(v)
                        distances[v] = distances[key] + 1
                        predecessors[v] = key
                    }
                })
                if (callback) {
                    callback(key)
                }
                if (pending.length) {
                    readVertices(pending)
                }
            })
        }
        readVertices(pending)
        return { distances, predecessors }
    }

    distance(fromVertex) {
        const vertices = this.vertices
        const { distances, predecessors } = this.bfs(fromVertex)
        vertices.forEach((toVertex) => {
            if (!!distances[toVertex]) {
                let preVertex = predecessors[toVertex]
                let slug = ''
                while (fromVertex !== preVertex) {
                    slug = `${preVertex} - ${slug}`
                    preVertex = predecessors[preVertex]
                }
                slug = `${fromVertex} - ${slug}${toVertex}`
                console.log(slug)
            }
        })
    }

    // 深度优先搜索
    dfs(callback) {
        let readTimer = 0
        const read = []
        const readTimes = []
        const finishedTimes = []
        const predecessors = []
        const adjList = { ...this }
        const readVertices = (vertices, predecessor) => {
            vertices.forEach((key) => {
                readTimer++
                if (adjList.get(key).every(v => read.includes(v)) && !finishedTimes[key]) {
                    finishedTimes[key] = readTimer
                }
                if (read.includes(key)) {
                    return false
                }
                readTimes[key] = readTimer
                read.push(key)
                if (callback) {
                    callback(key)
                }
                predecessors[key] = predecessors[key] || predecessor || null
                if (read.length !== this.vertices.length) {
                    readVertices(adjList.get(key), key)
                }
            })
        }
        readVertices(adjList.keys)
        return { readTimes, finishedTimes, predecessors }
    }
}

const graph = new Graph();

['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].forEach(c => graph.addVertex(c))
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')

console.log(graph.toString())
graph.bfs(graph.vertices[0], value => console.log(`Visited vertex: ${value}`))
graph.distance(graph.vertices[0])
graph.dfs(value => console.log(`Visited vertex: ${value}`))
