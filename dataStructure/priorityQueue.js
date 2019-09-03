// 优先队列

class PriorityQueue {
    constructor() {
        this.items = []
    }

    enqueue(elem, priority) {
        const queueElem = { elem, priority }
        if (this.isEmpty) {
            this.items.push(queueElem)
        } else {
            const preIndex = this.items.findIndex((item) => {
                return queueElem.priority < item.priority
            })
            if (preIndex > -1) {
                this.items.splice(preIndex, 0, queueElem)
            } else {
                this.items.push(queueElem)
            }
        }
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
        console.log(this.items)
    }
}

const priorityQueue = new PriorityQueue()
console.log(priorityQueue.isEmpty) // true

priorityQueue.enqueue('John', 2)
priorityQueue.enqueue('Jack', 1)
priorityQueue.enqueue('Camila', 1)
priorityQueue.enqueue('Rita', 3)
priorityQueue.enqueue('Sky', 2)
priorityQueue.enqueue('Orange', 1)

priorityQueue.print()

console.log(priorityQueue.isEmpty, priorityQueue.size) // false 6
