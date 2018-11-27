import BinarySearchTree from './../src/lib/BinarySearchTree'

describe('测试 二叉搜索树', () => {
  describe('初始化', () => {
    it('root 应该为 null', () => {
      const tree = new BinarySearchTree()
      const root = tree.root
      expect(root).toBeNull()
    })
  })
  describe('测试 insert', () => {
    it('依次插入2,5,1 验证树结构', () => {
      const tree = new BinarySearchTree()
      tree.insert(2)
      tree.insert(5)
      tree.insert(1)
      const root = tree.root
      expect(root).not.toBeNull()
      expect(root.key).toBe(2)
      expect(root.left.key).toBe(1)
      expect(root.right.key).toBe(5)
    })
  })

  describe('测试 search', () => {
    const tree = new BinarySearchTree()
    tree.insert(2)
    tree.insert(5)
    tree.insert(1)
    it('依次插入2、5、1，查找1，应返回true', () => {
      expect(tree.search(1)).toBe(true)
    })
    it('依次插入2、5、1，查找1，应返回true', () => {
      expect(tree.search(2)).toBe(true)
    })
    it('依次插入2、5、1，查找0，应返回false', () => {
      expect(tree.search(0)).toBe(false)
    })
  })

  describe('测试 遍历', () => {
    let tree = new BinarySearchTree()
    it('依次插入6、5、1、7、8、10、2', () => {
      tree.insert(6)
      tree.insert(5)
      tree.insert(1)
      tree.insert(7)
      tree.insert(8)
      tree.insert(10)
      tree.insert(2)
      const root = tree.root
      expect(root.key).toBe(6)
      expect(root.left.key).toBe(5)
      expect(root.right.key).toBe(7)
    })
    it('中序遍历 顺序为1, 2, 5, 6, 7, 8, 10', () => {
      const result = []
      const callback = node => {
        result.push(node.key)
      }

      tree.inOrderTraverse(callback)

      expect(result).toEqual([1, 2, 5, 6, 7, 8, 10])
    })
    it('先序遍历 顺序为6, 5, 1, 2, 7, 8, 10', () => {
      const result = []
      const callback = node => {
        result.push(node.key)
      }

      tree.preOrderTraverse(callback)

      expect(result).toEqual([6, 5, 1, 2, 7, 8, 10])
    })
    it('后序遍历 顺序为2, 1, 5, 10, 8, 7, 6', () => {
      const result = []
      const callback = node => {
        result.push(node.key)
      }

      tree.postOrderTraverse(callback)

      expect(result).toEqual([2, 1, 5, 10, 8, 7, 6])
    })
  })

  describe('测试 最值', () => {
    let tree = new BinarySearchTree()
    it('依次插入6、5、1、7、8、10、2', () => {
      tree.insert(6)
      tree.insert(5)
      tree.insert(1)
      tree.insert(7)
      tree.insert(8)
      tree.insert(10)
      tree.insert(2)
      const root = tree.root
      expect(root.key).toBe(6)
      expect(root.left.key).toBe(5)
      expect(root.right.key).toBe(7)
    })
    it('调用min 返回1', () => {
      expect(tree.min()).toBe(1)
    })
    it('调用max 返回10', () => {
      expect(tree.max()).toBe(10)
    })
  })
})
