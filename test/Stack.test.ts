import Stack from '../src/lib/Stack'

describe('Stack test', () => {
  it('push', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.size()).toBe(1)
  })
  it('push many', () => {
    const stack = new Stack()
    stack.push(1, 2, 3)
    expect(stack.size()).toBe(3)
  })
  it('pop', () => {
    const stack = new Stack()
    stack.push(1, 2, 'a')
    expect(stack.pop()).toBe('a')
    expect(stack.size()).toBe(2)
  })
  it('peek', () => {
    const stack = new Stack()
    stack.push(1, 2, 'a')
    expect(stack.peek()).toBe('a')
    expect(stack.size()).toBe(3)
  })
  it('empty peek', () => {
    const stack = new Stack()
    expect(stack.peek()).toBe(undefined)
  })
  it('clear', () => {
    const stack = new Stack()
    stack.push(1, 2, 'a')
    expect(stack.size()).toBe(3)
    stack.clear()
    expect(stack.size()).toBe(0)
    expect(stack.isEmpty()).toBe(true)
  })
})
