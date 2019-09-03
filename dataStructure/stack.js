// 栈
class Stack {
    constructor() {
        this.items = []
    }

    push(elem) {
        this.items.push(elem)
    }

    pop() {
        return this.items.pop()
    }

    get peek() {
        return this.items[this.items.length - 1]
    }

    get isEmpty() {
        return !this.items.length
    }

    get size() {
        return this.items.length
    }

    clear() {
        this.items = []
    }

    print() {
        console.log(this.items.toString())
    }
}

const stack = new Stack()
console.log(stack.isEmpty) // true

stack.push(5)
stack.push(8)

console.log(stack.peek) // 8
stack.push(11)
console.log(stack.size) // 3
console.log(stack.isEmpty) // false
