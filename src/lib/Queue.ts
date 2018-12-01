export default class Queue<T> {
  private items: Array<T> = []
  constructor() {}
  isEmpty(): boolean {
    return this.size() === 0
  }
  size(): number {
    return this.items.length
  }
  enqueue(...args: any): void {
    this.items.push(...args)
  }
  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined

    return this.items.shift()
  }
  front(): T | undefined {
    return this.isEmpty() ? undefined : this.items[0]
  }
  toString(): string {
    return this.items.join(',')
  }
}
