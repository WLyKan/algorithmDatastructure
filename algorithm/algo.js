// 斐波那契数列
// @author:King. Date:2019-02-25 14:04
function fibonacci(num) {
    if (num === 1 || num === 2) {
        return 1
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
}

// 动态规划
// 最小硬币数找零
// @author:King. Date:2019-02-25 14:07
class MinCoinChange {
    constructor(coins) {
        this.coins = coins
        this.cache = {}
    }

    makeChange(amount) {
        if (!amount) {
            return []
        }
        if (this.cache[amount]) {
            return this.cache[amount]
        }
        let min = []
        let newMin
        let newAmount
        this.coins.forEach((coin) => {
            newAmount = amount - coin
            if (newAmount >= 0) {
                newMin = this.makeChange(newAmount)
            }
            if (newAmount >= 0
                && (newMin.length < min.length - 1 || !min.length)
                && (newMin.length || !newAmount)) {
                min = [coin].concat(newMin)
            }
        })
        this.cache[amount] = min
        return this.cache[amount]
    }
}
const minCoinChange = new MinCoinChange([1, 5, 10, 25])
console.log(minCoinChange.makeChange(36)) // [1, 10, 25]

const minCoinChange2 = new MinCoinChange([1, 3, 4])
console.log(minCoinChange2.makeChange(6)) // [3, 3]
