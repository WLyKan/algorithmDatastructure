// 链表
// @author:King. Date:2019-02-18 17:49

class Node {
    constructor(elem) {
        this.element = elem
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    append(elem) {
        const node = new Node(elem)
        let current = null
        if (this.head === null) {
            this.head = node
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        // eslint-disable-next-line
        this.length++
    }

    insert(position, elem) {
        if (position >= 0 && position <= this.length) {
            const node = new Node(elem)
            let current = this.head
            let previous = null
            let index = 0

            if (position === 0) {
                this.head = node
            } else {
                // eslint-disable-next-line
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            // eslint-disable-next-line
            this.length++
            return true
        }
        return false
    }

    removeAt(position) {
        if (position > -1 && position < this.length) {
            let current = this.head
            let previous = null
            let index = 0
            if (position === 0) {
                this.head = current.next
            } else {
                // eslint-disable-next-line
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            // eslint-disable-next-line
            this.length--
        }
        return null
    }

    // 寻找元素下标
    findIndex(elem) {
        let current = this.head
        let index = -1
        while (current) {
            if (elem === current.element) {
                return index + 1
            }
            // eslint-disable-next-line
            index++
            current = current.next
        }
        return -1
    }

    // 删除制定文档
    remove(elem) {
        const index = this.indexOf(elem)
        return this.removeAt(index)
    }

    isEmpty() {
        return !this.length
    }

    size() {
        return this.length
    }

    toString() {
        let current = this.head
        let string = ''
        while (current) {
            string += `${current.element}`
            current = current.next
        }
        return string
    }
}

export default LinkedList

const linkedList = new LinkedList()

console.log(linkedList)
linkedList.append(2)
linkedList.append(6)
linkedList.append(24)
linkedList.append(152)

linkedList.insert(3, 18)
console.log(linkedList)
console.log(linkedList.findIndex(24))
