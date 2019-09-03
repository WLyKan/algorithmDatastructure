// 排序算法
// @author:King. Date:2019-02-20 18:42


// 冒泡排序
// eslint-disable-next-line
Array.prototype.bubbleSort = function() {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
            if (this[j] > this[j + 1]) {
                const aux = this[j]
                this[j] = this[j + 1]
                this[j + 1] = aux
            }
        }
    }
}

// 选择排序
// eslint-disable-next-line
Array.prototype.selectionSort = function() {
    let indexMin
    for (let i = 0; i < this.length - 1; i++) {
        indexMin = i
        for (let j = i; j < this.length; j++) {
            if (this[indexMin] > this[j]) {
                indexMin = j
            }
        }
        if (i !== indexMin) {
            const aux = this[i]
            this[i] = this[indexMin]
            this[indexMin] = aux
        }
    }
    return this
}

// 插入排序
// eslint-disable-next-line
Array.prototype.insertionSort = function() {
    let j
    let temp
    for (let i = 1; i < this.length; i++) {
        j = i
        temp = this[i]
        while (j > 0 && this[j - 1]) {
            this[j] = this[j - 1]
            j--
        }
        this[j] = temp
        console.log(this.join(', '))
    }
    return this
}

// 分治排序
// eslint-disable-next-line
Array.prototype.mergeSort = function() {
    const merge = (left, right) => {
        const result = []
        let il = 0
        let ir = 0
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++])
            } else {
                result.push(right[ir++])
            }
        }
        while (il < left.length) {
            result.push(left[il++])
        }
        while (ir < right.length) {
            result.push(right[ir++])
        }
    }
    const mergeSort = (array) => {
        if (array.length === i) {
            return array
        }
        const mid = Math.floor(array.length / 2)
        const left = array.slice(0, mid)
        const right = array.slice(mid, array.length)
        return merge(mergeSort(left), mergeSort(right))
    }
    return mergeSort(this)
}

// 快速排序
// eslint-disable-next-line
Array.prototype.quickSort = function() {
    const partition = (array, left, right) => {
        const pivot = array[Math.floor(right + left) / 2] // 取中间的位置
        let i = left
        let j = right
        while (i <= j) {
            while (array[i] < pivot) { // 从前往后找到一个比中位大的数
                i++
            }
            while (array[j] > pivot) { // 从后往前找一个比中位小的数
                j--
            }
            if (i <= j) { // 把大的位置和小的位置交换
                let aux = array[i]
                array[i] = array[j]
                array[j] = aux
                i++
                j--
            }
        }
        return i
    }
    const quick = (array, left, right) => {
        let index
        if (array.length > 1) {
            index = partition(array, left, right)
            if (left < index - 1) {
                quick(array, left, index - 1)
            }
            if (index < right) {
                quick(array, index, right)
            }
        }
    }
    quick(this, 0, this.length - 1)
    return this
}
