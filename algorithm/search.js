// 搜索算法
// @author:King. Date:2019-02-25 11:08

// 顺序搜索
// eslint-disable-next-line
Array.prototype.sequentialSearch = function (item) {
    for (let i = 0; i < this.length; i++) {
        if (item === this[i]) {
            return i
        }
    }
    return -1
}

// 二分搜索
// eslint-disable-next-line
Array.prototype.binarySearch = function (item) {
    this.quickSort()
    let low = 0
    let mid = null
    let element = null
    let high = this.length - 1
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        element = this[mid]
        if (element < item) {
            low = mid + 1
        } else if (element > item) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return -1
}
