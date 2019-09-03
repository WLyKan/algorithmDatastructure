// 队列
class Queue {
    constructor(items) {
        this.items = items || []
    }

    enqueue(elem) {
        this.items.push(elem)
    }

    dequeue() {
        return this.items.shift()
    }

    front() {
        return this.items[0]
    }

    clear() {
        this.items = []
    }

    get size() {
        return this.items.length
    }

    get isEmpty() {
        return !this.items.length
    }

    print() {
        console.log(this.items.toString())
    }
}

export default Queue

const queue = new Queue()
console.log(queue.isEmpty) // true

queue.enqueue('John')
queue.enqueue('Jack')
queue.enqueue('Camila')
console.log(queue.size) // 3
console.log(queue.isEmpty) // false

queue.dequeue()
queue.dequeue()
queue.print() // Camila
