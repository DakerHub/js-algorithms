import Set from './Set'
import Queue from './Queue'
import Stack from './Stack'

interface Table {
  [index: string]: Set
}

interface Map {
  [index: string]: any
}

export default class Graph {
  private nodeList: Array<string> = []
  private table: Table = {}

  addNode(node: string): void {
    this.nodeList.push(node)

    this.table[node] = new Set()
  }
  /**
   * 添加一条边
   * @param node1 边的起始节点
   * @param node2 边的终止节点
   */
  addEdge(node1: string, node2: string): void {
    this.table[node1].add(node2)
    this.table[node2].add(node1)
  }
  /**
   * 广度优先搜索
   * @param root 起始搜索节点
   * @param callback 回调函数
   */
  breadthFirshSearch(root: string, callback: Function): void {
    const typeMap = this.initNodeType()
    const queue = new Queue()

    queue.enqueue(root)

    while (!queue.isEmpty()) {
      const front = queue.dequeue() as string

      typeMap[front] = 2

      const neighbors = this.table[front].values()

      neighbors.forEach(neighbor => {
        if (typeMap[neighbor] === 1) {
          typeMap[neighbor] = 2
          queue.enqueue(neighbor)
        }
      })

      callback && callback(front)
    }
  }

  /**
   * 深度优先遍历
   * @param root 起始搜索节点
   * @param callback 回调函数
   */
  depthFirstSearch(root: string, callback: Function): void {
    const typeMap = this.initNodeType()
    const stack = new Stack()

    stack.push(root)

    while (!stack.isEmpty()) {
      const peek = stack.pop() as string

      if (typeMap[peek] === 3) continue

      const neighbors = this.table[peek].values() as Array<string>

      neighbors.forEach(neighbor => {
        if (typeMap[neighbor] !== 3) {
          typeMap[neighbor] = 2
          stack.push(neighbor)
        }
      })

      typeMap[peek] = 3

      callback && callback(peek)
    }
  }

  /**
   * 初始化节点的状态
   * 1：未被访问
   * 2：未被完全搜索
   * 3：已被完全搜索
   */
  initNodeType(): Map {
    const typeMap: Map = {}

    this.nodeList.forEach(element => {
      typeMap[element] = 1
    })

    return typeMap
  }
  /**
   * 返回格式n -> m b c,m -> n
   */
  toString(): string {
    const resultArr = []

    for (const [key, value] of Object.entries(this.table)) {
      const neighbors = value.values().join(' ')
      resultArr.push(`${key} -> ${neighbors}`)
    }

    return resultArr.join(',')
  }
}
