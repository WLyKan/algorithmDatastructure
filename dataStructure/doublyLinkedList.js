// 双向链表
// @author:King. Date:2019-02-18 17:49

class Node {
    constructor(element) {
        this.element = element
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    insert(position, element) {
        if (position >= 0 && position <= this.length) {
            const node = new Node(element)
            let current = this.head
            let previous = null
            let index = 0

            // 首位
            if (position === 0) {
                if (!head) {
                    this.head = node
                    this.tail = node
                } else {
                    node.next = current
                    this.head = node
                    current.prev = node
                }
            // 末尾
            } else if (position === this.length) {
                current = this.tail
                current.next = node
                node.prev = current
                this.tail = node
            // 中位
            } else {
                // eslint-disable-next-line
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
            // eslint-disable-next-line
            this.length++
            return true
        }
        return false
    }

    // 移除指定位置的元素
    removeAt(position) {
        if (position > -1 && position < this.length) {
            let current = this.head
            let previous = null
            let index = 0
            
            if (position === 0) {
                this.head = this.head.next
                this.head.prev = null
                if (this.length=== 1) {
                    this.tail = null
                }
            } else if (position === this.length - 1) {
                this.tail = this.tail.prev
                this.tail.next = null
            } else {
                // eslint-disable-next-line
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                current.next.prev = previous
            }
            // eslint-disable-next-line
            this.length--
            return current.element
        }
        return null
    }
}
