import LinkedList from './../src//lib/LinkedList'

describe('LinkedList test', () => {
  it('init', () => {
    const linkedList = new LinkedList()
    expect(linkedList.size()).toBe(0)
    expect(linkedList.isEmpty()).toBe(true)
  })
  it('append', () => {
    const linkedList = new LinkedList()
    linkedList.append('a')
    linkedList.append('b')
    expect(linkedList.size()).toBe(2)
    expect(linkedList.toString()).toBe('a,b')
  })
  it('insert', () => {
    const linkedList = new LinkedList()
    linkedList.append('a')
    linkedList.append('b')
    linkedList.insert(1, 'c')
    expect(linkedList.size()).toBe(3)
    expect(linkedList.toString()).toBe('a,c,b')
  })
})
