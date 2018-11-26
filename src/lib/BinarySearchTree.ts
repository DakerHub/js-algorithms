interface Node {
  key: any
  left: Node | null
  right: Node | null
}

export default class BinarySearchTree {
  root: Node | null = null
  constructor() {}
  getRoot(): Node | null {
    return this.root
  }
  insert(key: any): void {
    const newNode = {
      key,
      left: null,
      right: null
    }

    if (this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root

      while (currentNode) {
        if (currentNode.key > key) {
          if (!currentNode.left) {
            currentNode.left = newNode
            break
          }

          currentNode = currentNode.left
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode
            break
          }

          currentNode = currentNode.right
        }
      }
    }
  }
}
