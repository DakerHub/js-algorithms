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
  remove(key: any): void {
    let currentNode = this.root
    let prevNode = null

    while (currentNode) {
      if (currentNode.key === key) {
        let node: Node | null = this.removeNode(currentNode)
        if (prevNode) {
          if (prevNode.key > key) {
            prevNode.left = node
          } else {
            prevNode.right = node
          }
        } else if (this.root) {
          this.root.key = node.key
          node = null
        }

        break
      } else if (currentNode.key > key) {
        prevNode = currentNode
        currentNode = currentNode.left
      } else {
        prevNode = currentNode
        currentNode = currentNode.right
      }
    }
  }
  removeNode(node: Node): Node {
    if (!node.left && !node.right) {
      return node
    } else if (node.left && node.right) {
      let currentNode = node.right
      let prevNode = node

      while (currentNode) {
        if (currentNode.left) {
          prevNode = currentNode
          currentNode = currentNode.left
        } else {
          node.key = currentNode.key
          prevNode.left = null
          break
        }
      }
      return node
    } else if (node.left) {
      return node.left
    } else {
      return node.right as Node
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
