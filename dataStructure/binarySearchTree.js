// 二叉树搜索
// @author:King. Date:2019-02-19 16:20

class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(key) {
        const newNode = new Node(key)
        const insertNode = (node, newNode) => {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                // eslint-disable-next-line
                if (node.right === null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            }
        }
        if (!this.root) {
            this.root = newNode
        } else {
            insertNode(this.root, newNode)
        }
    }

    // 中序遍历
    inOrderTraverse(callback) {
        const inOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                inOrderTraverseNode(node.left, callback)
                callback(node.key)
                inOrderTraverseNode(node.right, callback)
            }
        }
        inOrderTraverseNode(this.root, callback)
    }

    // 先序遍历
    preOrderTraverse(callback) {
        const preOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                callback(node, key)
                preOrderTraverseNode(node.left, callback)
                preOrderTraverseNode(node.right, callback)
            }
        }
        preOrderTraverseNode(this.root, callback)
    }

    // 后序遍历
    postOrderTraverse(callback) {
        const postOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                postOrderTraverseNode(node.left, callback)
                postOrderTraverseNode(node.right, callback)
                callback(node.key)
            }
        }
        postOrderTraverseNode(this.node, callback)
    }

    min(node) {
        const minNode = (node) => {
            // eslint-disable-next-line
            return node ? (node.left ? minNode(node.left) : node) : null
        }
        return minNode(node || this.root)
    }

    max(node) {
        const maxNode = (node) => {
            // eslint-disable-next-line
            return node ? (node.right ? maxNode(node.right) : node) : null
        }
        return maxNode(node || this.root)
    }

    search(key) {
        const searchNode = (node, key) => {
            if (node === null) {
                return false
            }
            if (node.key === key) {
                return node
            }
            return searchNode((key < node.key) ? node.left : node.right, key)
        }
        return searchNode(this.root, key)
    }

    remove(key) {
        const removeNode = (node, key) => {
            if (node === null) {
                return false
            }
            if (node.key === key) {
                console.log(node)
                if (node.left === null && node.right === null) {
                    const _node = node
                    // node = null
                    return _node
                }
                console.log('key', key)
            } else if (node.left !== null && node.key > key) {
                if (node.left.key === key) {
                    node.left.key = this.min(node.left.right).key
                    removeNode(node.left.right, node.left.key)
                    return node.left
                }
                return removeNode(node.left, key)
            } else if (node.right !== null && node.key < key) {
                if (node.right.key === key) {
                    node.right.key = this.min(node.right.right).key
                    removeNode(node.right, node.right.key)
                    return node.right
                }
                return removeNode(node.right, key)
            } else {
                return false
            }
            return removeNode((key < node.key) ? node.left : node.right, key)
        }
        return removeNode(this.root, key)
    }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.inOrderTraverse((value) => {
    console.log(value)
})
tree.preOrderTraverse((value) => {
    console.log(value)
})
