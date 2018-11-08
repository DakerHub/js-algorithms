export default class Stack {
  private items: Array<any> = []
  constructor() {}
  push(...item: any) {
    this.items.push(...item)
  }
  pop(): any {
    return this.items.pop()
  }
  isEmpty(): boolean {
    return this.size() === 0
  }
  peek(): any {
    return this.isEmpty() ? undefined : this.items[this.items.length - 1]
  }
  clear(): void {
    this.items = []
  }
  size(): number {
    return this.items.length
  }
  toString(): string {
    return this.items.join(',')
  }
}
