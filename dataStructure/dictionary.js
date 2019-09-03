// 字典
// @author:King. Date:2019-02-18 18:40

class Dictionary {
    constructor() {
        this.items = {}
    }

    set(key, value) {
        this.items[key] = value
    }

    get(key) {
        return this.items[key]
    }

    remove(key) {
        delete this.items[key]
    }

    get keys() {
        return Object.keys(this.items)
    }

    get values() {
        // return Object.values(this.items) // new in ES7
        return Object.keys(this.items).reduce((r, c, i) => {
            r.push(this.items[c])
            return r
        }, [])
    }
}

export default Dictionary

const dictionary = new Dictionary()
dictionary.set('Gandalf', 'gandalf@gmail.com')
dictionary.set('John', 'john@gmail.com')
dictionary.set('Tyrion', 'tyrion@gmail.com')

console.log(dictionary)
console.log(dictionary.keys)
console.log(dictionary.values)
console.log(dictionary.items)
