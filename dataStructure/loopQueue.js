// 循环队列

import Queue from './queue'

class LoopQueue extends Queue {
    
    constructor(items) {
        super(items)
    }

    getIndex(index) {
        const length = this.items.length
        return index > length ? (index % length) : index
    }

    find(index) {
        return !this.isEmpty ? this.items[this.getIndex(index)] : null
    }
}

const loopQueue = new LoopQueue(['Surmo'])

loopQueue.enqueue('Sky')
loopQueue.enqueue('Even')
loopQueue.enqueue('Alice')

console.log(loopQueue.size, loopQueue.isEmpty)
console.log(loopQueue.finde(26))
console.log(loopQueue.finde(87651))
