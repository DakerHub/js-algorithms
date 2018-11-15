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
  getHead(): any {
    return this.head
  }
  append(element: any): boolean {
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

    return true
  }
  insert(index: number, element: any): boolean {
    if (index > this.length || index < 0) {
      return false
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

    return true
  }
  remove(element: any): any {
    if (this.isEmpty()) {
      return null
    }

    let currentNode = this.head
    let prevNode = null

    while (currentNode) {
      if (currentNode.element === element) {
        if (prevNode) {
          prevNode.next = currentNode.next
        } else {
          this.head = currentNode.next
        }
        this.length--

        return currentNode.element
      }
      prevNode = currentNode
      currentNode = currentNode.next
    }

    return null
  }
  removeAt(index: number): any {
    if (index > this.length || index < 0 || this.isEmpty()) {
      return null
    }
    let currentIndex = 0
    let currentNode = this.head as Node
    let prevNode = null

    while (currentIndex !== index && currentNode) {
      currentIndex++
      prevNode = currentNode
      currentNode = currentNode.next as Node
    }

    if (prevNode) {
      prevNode.next = currentNode.next
    } else {
      this.head = currentNode.next
    }

    this.length--
    return currentNode && currentNode.element
  }
  indexOf(element: any): number {
    let index = -1
    let currentIndex = 0
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.element === element) {
        index = currentIndex
        break
      }
      currentIndex++
      currentNode = currentNode.next
    }

    return index
  }
}
