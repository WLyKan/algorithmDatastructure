// 集合类
// @author:King. Date:2019-02-18 18:11

class Set {
    constructor() {
        this.items = {}
    }

    has(value) {
        return this.items.hasOwnProperty(value)
    }

    add(value) {
        if (!this.has(value)) {
            this.items[value] = value
            return true
        }
        return false
    }

    remove(value) {
        if (this.has(value)) {
            delete this.items[value]
            return true
        }
        return false
    }

    get size() {
        return Object.keys(this.items).length
    }

    get values() {
        return Object.keys(this.items)
    }
}

const set = new Set()
set.add(1)
console.log(set.values)
console.log(set.has(1));
console.log(set.size)

// 并集
union(otherSet) {
    const unionSet = new Set()
    this.values.forEach((v, i) => {
        unionSet.add(this.values[i])
    })
    otherSet.values.forEach((v, i) => {
        unionSet.add(otherSet.values[i])
    })
    return unionSet
}
// 交集
intersection(otherSet) {
    const intersectionSet = new Set()
    this.values.forEach((v, i) => {
        if (otherSet.has(v)) {
            intersectionSet.add(v)
        }
    })
    return intersectionSet
}
// 差集
difference(otherSet) {
    const differenceSet = new Set()
    this.values.forEach((v, i) => {
        if (!otherSet.has(v)) {
            differenceSet.add(v)
        }
    })
    return differenceSet
}
// 子集
subset(otherSet) {
    if (this.size > otherSet.size) {
        return false
    } else {
        return !this.values.some(v => !otherSet.has(v))
    }
}
