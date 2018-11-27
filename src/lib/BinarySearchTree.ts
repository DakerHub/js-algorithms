interface Node {
  key: any
  left: Node | null
  right: Node | null
}

export default class BinarySearchTree {
  root: Node | null = null
  constructor() {}
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
  search(key: any): boolean {
    let currentNode = this.root

    while (currentNode) {
      if (key < currentNode.key) {
        currentNode = currentNode.left
      } else if (key > currentNode.key) {
        currentNode = currentNode.right
      } else {
        return true
      }
    }

    return false
  }
  inOrderTraverse(callback: Function): void {
    this.inOrderTraverseNode(callback, this.root)
  }
  preOrderTraverse(callback: Function): void {
    this.preOrderTraverseNode(callback, this.root)
  }
  postOrderTraverse(callback: Function): void {
    this.postOrderTraverseNode(callback, this.root)
  }
  min(): any {
    let currentNode = this.root
    while (currentNode) {
      if (currentNode.left) {
        currentNode = currentNode.left
      } else {
        return currentNode.key
      }
    }
  }
  max(): any {
    let currentNode = this.root
    while (currentNode) {
      if (currentNode.right) {
        currentNode = currentNode.right
      } else {
        return currentNode.key
      }
    }
  }
  private inOrderTraverseNode(callback: Function, node: Node | null): void {
    if (!node) return

    this.inOrderTraverseNode(callback, node.left)

    callback(node)

    this.inOrderTraverseNode(callback, node.right)
  }
  private preOrderTraverseNode(callback: Function, node: Node | null): void {
    if (!node) return

    callback(node)
    this.preOrderTraverseNode(callback, node.left)
    this.preOrderTraverseNode(callback, node.right)
  }
  private postOrderTraverseNode(callback: Function, node: Node | null): void {
    if (!node) return

    this.postOrderTraverseNode(callback, node.left)
    this.postOrderTraverseNode(callback, node.right)
    callback(node)
  }
}
