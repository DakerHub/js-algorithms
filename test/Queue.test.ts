import Queue from './../src//lib/Queue'

describe('Queue test', () => {
  it('init', () => {
    const queue = new Queue()
    expect(queue.size()).toBe(0)
    expect(queue.isEmpty()).toBe(true)
  })
  it('enqueue', () => {
    const queue = new Queue()
    queue.enqueue(1)
    expect(queue.size()).toBe(1)
  })
  it('enqueue many', () => {
    const queue = new Queue()
    queue.enqueue(1, 2, 3)
    expect(queue.size()).toBe(3)
    expect(queue.front()).toBe(1)
  })
  it('dequeue', () => {
    const queue = new Queue()
    queue.enqueue('a', 2, 3)
    expect(queue.dequeue()).toBe('a')
    expect(queue.size()).toBe(2)
  })
})
