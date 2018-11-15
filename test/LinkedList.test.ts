import LinkedList from './../src//lib/LinkedList'

describe('链表测试', () => {
  describe('初始化', () => {
    it('新建一个链表对象', () => {
      const linkedList = new LinkedList()
      expect(linkedList.size()).toBe(0)
      expect(linkedList.getHead()).toBe(null)
      expect(linkedList.isEmpty()).toBe(true)
    })
  })
  describe('测试 append', () => {
    it('在链表中追加一个元素', () => {
      const linkedList = new LinkedList()
      linkedList.append('a')
      linkedList.append('b')
      expect(linkedList.size()).toBe(2)
      expect(linkedList.getHead().element).toBe('a')
      expect(linkedList.toString()).toBe('a,b')
    })
  })
  describe('测试 insert', () => {
    it('在位置1上插入一个元素', () => {
      const linkedList = new LinkedList()
      linkedList.append('a')
      linkedList.append('b')
      linkedList.insert(1, 'c')
      expect(linkedList.size()).toBe(3)
      expect(linkedList.toString()).toBe('a,c,b')
    })
  })
  describe('测试 remove', () => {
    it('移除一个元素', () => {
      const linkedList = new LinkedList()
      linkedList.append('a')
      linkedList.append('b')
      expect(linkedList.remove('a')).toBe('a')
      expect(linkedList.size()).toBe(1)
      expect(linkedList.toString()).toBe('b')
    })
    it('移除链表上不存在的元素', () => {
      const linkedList = new LinkedList()
      linkedList.append('a')
      linkedList.append('b')
      expect(linkedList.remove('c')).toBe(null)
      expect(linkedList.size()).toBe(2)
    })
  })
  describe('测试 removeAt', () => {
    it('移除位置为1的元素', () => {
      const linkedList = new LinkedList()
      linkedList.append('a')
      linkedList.append('b')
      expect(linkedList.removeAt(1)).toBe('b')
      expect(linkedList.size()).toBe(1)
    })
    it('移除空链表上的元素', () => {
      const linkedList = new LinkedList()
      expect(linkedList.removeAt(0)).toBe(null)
      expect(linkedList.removeAt(1)).toBe(null)
    })
  })
  describe('测试 indexOf', () => {
    it('查找链表上存在的元素的位置', () => {
      const linkedList = new LinkedList()
      linkedList.append('a')
      linkedList.append('b')
      expect(linkedList.indexOf('a')).toBe(0)
      expect(linkedList.indexOf('b')).toBe(1)
    })
    it('查找链表上不存在的元素的位置', () => {
      const linkedList = new LinkedList()
      linkedList.append('a')
      linkedList.append('b')
      expect(linkedList.indexOf('c')).toBe(-1)
    })
  })
})
