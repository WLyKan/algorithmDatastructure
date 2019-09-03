// 散列表
// @author:King. Date:2019-02-19 10:32
import LinkedList from './linkedList'

class HashTable {
    constructor() {
        this.table = []
    }

    //  'lose lose'散列函数
    // 我们实现的"lose lose"散列函数并不是一个表现良好的散列函数，因为它会产生太多的冲突。
    // 一个表现良好的散列函数是由几个方 面构成的：插人和检索元素的时间（即性能），当然也包括较低的冲突可能性。
    // 我们可以在网上 找到一些不同的实现方法。像：djb2、sdbm...，或者也可以实现自己的散列函数。
    static loseloseHashCode(key) {
        let hash = 0
        for (const codePoint of key) {
            hash += codePoint.charCodeAt()
        }
        return hash % 37
    }

    // 比“lose lose”更好的散列函数是 djb2：
    static djb2HashCode(key) {
        let hash = 5381
        for (const codePoint of key) {
            hash = hash * 33 + codePoint.charCodeAt()
        }
        return hash % 1013
    }

    put(key, value) {
        const position = this.loseloseHashCode(key)
        console.log(`${position} - ${key}`)
        this.table[position] = value
    }

    get(key) {
        return this.table[HashTable.loseloseHashCode(key)]
    }

    remove(key) {
        this.table[HashTable.loseloseHashCode(key)] = undefined
    }

    // 分离链接: 为散列表每个位置创建一个链表，存储多个元素
    put1(key, value) {
        const position = this.loseloseHashCode(key)
        if (this.table[position] === undefined) {
            this.table[position] = new LinkedList()
        }
        this.table[position].append({ key, value })
    }

    get1(key) {
        const position = this.loseloseHashCode(key)
        if (this.table[position] === undefined) {
            return undefined
        }

        const getElementValue = (node) => {
            if (!node && !node.element) {
                return undefined
            }
            if (Object.is(node.element.key, key)) {
                return node.element.value
            }
            // 以上都不满足
            return getElementValue(node.next)
        }
        return getElementValue(this.table[position].head)
    }

    remove1(key) {
        const position = this.loseloseHashCode(key)
        if (this.table[position] === undefined) {
            return undefined
        }
        const getElementValue = (node) => {
            if (!node && !node.element) {
                return false
            }
            if (Object.is(node.element.key, key)) {
                this.table[position].remove(node.element)
                if (this.table[position].isEmpty) {
                    this.table[position] = undefined
                }
                return true
            }
            // 以上都不成立
            return getElementValue(node.text)
        }
        return getElementValue(this.table[position].head)
    }

    // 线性探查： 如果当前index已经被占据，尝试index+1，以此类推
    put2(key, value) {
        let position = this.loseloseHashCode(key)
        if (this.table[position] === undefined) {
            this.table[position] = { key, value }
        } else {
            let index = ++position
            while (this.table[index] !== undefined) {
                index++
            }
            this.table[index] = { key, value }
        }
        this.table[position].append({ key, value })
    }

    get2(key) {
        const position = this.loseloseHashCode(key)
        const getElementValue = (index) => {
            if (this.table[index] === undefined) {
                return undefined
            }
            if (Object.is(this.table[index].key, key)) {
                return this.table[index].value
            }
            return getElementValue(index + 1)
        }
        return getElementValue(position)
    }

    remove2(key) {
        const position = this.loseloseHashCode(key)
        const removeElementValue = (index) => {
            if (this.table[index] === undefined) {
                return false
            }
            if (Object.is(this.table[index].key, key)) {
                this.table[index] = undefined
                return true
            }
            return removeElementValue(index + 1)
        }
        return removeElementValue(position)
    }
}

const hash = new HashTable()
hash.put('Surmon', 'surmon@gmail.com') // 19 - Surmon

console.log(hash.get('Surmon'))
