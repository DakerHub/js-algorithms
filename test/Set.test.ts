import Set from './../src//lib/Set'

describe('测试 Set', () => {
  describe('测试 add', () => {
    const set = new Set()
    it('添加一个字符串 "a"', () => {
      expect(set.add('a')).toBe(true)
      expect(set.size()).toBe(1)
      expect(set.has('a')).toBe(true)
    })
    it('重复添加字符串 "a"', () => {
      expect(set.add('a')).toBe(false)
    })
  })
  describe('测试 has', () => {
    const set = new Set()
    it('检测一个存在的值', () => {
      set.add('a')
      expect(set.has('a')).toBe(true)
    })
    it('检测一个不存在的值', () => {
      expect(set.has('b')).toBe(false)
    })
  })
  describe('测试 delete', () => {
    const set = new Set()
    it('删除一个存在的值,返回被删除的值', () => {
      set.add('a')
      expect(set.delete('a')).toBe('a')
    })
    it('删除后原Set不在存在该值', () => {
      expect(set.has('a')).toBe(false)
    })
    it('删除一个不能存在的值', () => {
      expect(set.delete('b')).toBe(null)
    })
  })
  describe('测试 clear', () => {
    const set = new Set()
    it('清空集合', () => {
      set.add('a')
      set.add('b')
      set.clear()
      expect(set.size()).toBe(0)
    })
  })
})
