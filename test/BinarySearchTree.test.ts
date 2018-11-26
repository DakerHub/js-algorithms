import BinarySearchTree from './../src/lib/BinarySearchTree'

describe('测试 二叉搜索树', () => {
  describe('初始化', () => {
    it('root 应该为 null', () => {
      const tree = new BinarySearchTree()
      const root = tree.getRoot()
      expect(root).toBeNull()
    })
  })
  describe('测试 insert', () => {
    it('依次插入2,5,1 验证树结构', () => {
      const tree = new BinarySearchTree()
      tree.insert(2)
      tree.insert(5)
      tree.insert(1)
      const root = tree.getRoot()
      expect(root).not.toBeNull()
      expect(root.key).toBe(2)
      expect(root.left.key).toBe(1)
      expect(root.right.key).toBe(5)
    })
  })
})
