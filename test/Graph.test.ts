import Graph from './../src/lib/Graph'

const initGraph = (nodes: Array<string>, edges): Graph => {
  const graph = new Graph()

  nodes.forEach(element => {
    graph.addNode(element)
  })

  edges.forEach(([n1, n2]) => {
    graph.addEdge(n1, n2)
  })

  return graph
}

describe('测试 图', () => {
  describe('初始化', () => {
    it('初始化一个图，啥都没有', () => {
      const graph = new Graph()
      expect(graph.toString()).toBe('')
    })
  })
  describe('添加节点', () => {
    it('添加a-b、a-c,链接表为a-b、c,b-a,c-a', () => {
      const nodes = ['a', 'b', 'c']
      const edges = [['a', 'b'], ['a', 'c']]
      const graph = initGraph(nodes, edges)

      expect(graph.toString()).toBe('a -> b c,b -> a,c -> a')
    })
    it('添加重复的节点a-b、a-b,链接表为a-b,b-a', () => {
      const nodes = ['a', 'b']
      const edges = [['a', 'b'], ['b', 'a']]
      const graph = initGraph(nodes, edges)
      expect(graph.toString()).toBe('a -> b,b -> a')
    })
  })
  describe('遍历图', () => {
    /**
     * f
     * |
     * a --- b----d
     * |     |
     * c --- e
     */
    const createGraph1 = function() {
      const nodes = ['a', 'b', 'c', 'd', 'e', 'f']
      const edges = [['a', 'b'], ['a', 'c'], ['b', 'd'], ['b', 'e'], ['a', 'f'], ['c', 'e']]
      return initGraph(nodes, edges)
    }
    /**
     * a -- d --- h
     * | \   \
     * b   c--g
     * | \
     * e   f
     * |
     * i
     */
    const createGraph2 = function() {
      const nodes = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'g', 'i']
      const edges = [
        ['a', 'b'],
        ['a', 'c'],
        ['a', 'd'],
        ['c', 'g'],
        ['d', 'g'],
        ['d', 'h'],
        ['b', 'e'],
        ['b', 'f'],
        ['e', 'i']
      ]
      return initGraph(nodes, edges)
    }
    it('预设的图1应该存在正确的链接表', () => {
      const graph = createGraph1()

      expect(graph.toString()).toBe('a -> b c f,b -> a d e,c -> a e,d -> b,e -> b c,f -> a')
    })
    describe('图1广度优先遍历', () => {
      it('遍历一个预设好的图，以a未开始节点，按照正确顺序遍历', () => {
        const graph = createGraph1()
        const path = []
        graph.breadthFirshSearch('a', node => {
          path.push(node)
        })
        expect(path.join('-')).toBe('a-b-c-f-d-e')
      })
      it('遍历一个预设好的图，以b未开始节点，按照正确顺序遍历', () => {
        const graph = createGraph1()
        const path = []
        graph.breadthFirshSearch('b', node => {
          path.push(node)
        })
        expect(path.join('-')).toBe('b-a-d-e-c-f')
      })
    })
    describe('图1深度优先遍历', () => {
      it('遍历一个预设好的图，以a为开始节点，按照正确顺序遍历', () => {
        const graph = createGraph1()
        const path = []
        graph.depthFirstSearch('a', node => {
          path.push(node)
        })
        expect(path.join('-')).toBe('a-f-c-e-b-d')
      })
      it('遍历一个预设好的图，以b为开始节点，按照正确顺序遍历', () => {
        const graph = createGraph1()
        const path = []
        graph.depthFirstSearch('b', node => {
          path.push(node)
        })
        expect(path.join('-')).toBe('b-e-c-a-f-d')
      })
    })
    it('预设的图2应该存在正确的链接表', () => {
      const graph = createGraph2()

      const list = [
        'a -> b c d',
        'b -> a e f',
        'c -> a g',
        'd -> a g h',
        'e -> b i',
        'f -> b',
        'h -> d',
        'g -> c d',
        'i -> e'
      ]

      expect(graph.toString()).toBe(list.join(','))
    })
    describe('图2广度优先遍历', () => {
      it('遍历一个预设好的图，以a未开始节点，按照正确顺序遍历', () => {
        const graph = createGraph2()
        const path = []
        graph.breadthFirshSearch('a', node => {
          path.push(node)
        })
        expect(path.join('-')).toBe('a-b-c-d-e-f-g-h-i')
      })
      it('遍历一个预设好的图，以c未开始节点，按照正确顺序遍历', () => {
        const graph = createGraph2()
        const path = []
        graph.breadthFirshSearch('c', node => {
          path.push(node)
        })
        expect(path.join('-')).toBe('c-a-g-b-d-e-f-h-i')
      })
    })
    describe('图2深度优先遍历', () => {
      it('遍历一个预设好的图，以a为开始节点，按照正确顺序遍历', () => {
        const graph = createGraph2()
        const path = []
        graph.depthFirstSearch('a', node => {
          path.push(node)
        })
        expect(path.join('-')).toBe('a-d-h-g-c-b-f-e-i')
      })
      it('遍历一个预设好的图，以b为开始节点，按照正确顺序遍历', () => {
        const graph = createGraph2()
        const path = []
        graph.depthFirstSearch('c', node => {
          path.push(node)
        })
        expect(path.join('-')).toBe('c-g-d-h-a-b-f-e-i')
      })
    })
  })
})
