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
    this.root = this.removeNode(this.root, key)
  }
  /**
   * 移除node子节点中的某个节点，并且返回根节点
   * @param node
   * @param key
   */
  removeNode(node: Node | null, key: any): Node | null {
    if (node === null) {
      return null
    }

    if (node.key < key) {
      node.right = this.removeNode(node.right, key)
      return node
    } else if (node.key > key) {
      node.left = this.removeNode(node.left, key)
      return node
    } else {
      // 找到目标节点
      if (!node.left && !node.right) {
        node = null
        return node
      }

      if (!node.left) {
        node = node.right
        return node
      }

      if (!node.right) {
        node = node.left
        return node
      }

      // 存在两个子节点，在右子孙中找到最小节点的替换掉顶节点，并且移除掉最小的那个节点
      const minKeyNode = this.getMinNode(node.right)
      node.key = minKeyNode.key
      node.right = this.removeNode(node.right, minKeyNode.key)
      return node
    }
  }
  private getMinNode(node: Node): Node {
    let minKeyNode: Node = node
    let currentNode: Node | null = node
    while (currentNode) {
      minKeyNode = currentNode
      currentNode = currentNode.left
    }
    return minKeyNode
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
