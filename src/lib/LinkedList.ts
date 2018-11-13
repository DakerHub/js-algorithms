interface Node {
  element: any
  next: Node | null
}

export default class LinkedList {
  private head: Node | null = null
  private length: number = 0
  constructor() {}
  size(): number {
    return this.length
  }
  isEmpty(): boolean {
    return this.length === 0
  }
  toString(): string {
    let currentNode = this.head
    const stringArr: Array<any> = []
    while (currentNode) {
      stringArr.push(currentNode.element)
      currentNode = currentNode.next
    }
    return stringArr.join(',')
  }
  append(element: any): void {
    const newNode: Node = {
      element,
      next: null
    }
    if (this.isEmpty()) {
      this.head = newNode
    } else {
      let currentNode = this.head as Node
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
    this.length++
  }
  insert(index: number, element: any): void {
    if (index > this.length || index < 0) {
      return
    }
    const newNode: Node = {
      element,
      next: null
    }
    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let currentIndex = 0
      let currentNode = this.head
      while (currentNode) {
        if (currentIndex === index - 1) {
          newNode.next = currentNode.next
          currentNode.next = newNode
          break
        }
        currentNode = currentNode.next
        currentIndex++
      }
    }
    this.length++
  }
}
