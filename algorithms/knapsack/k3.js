// 物品的重量
let W = [3, 4, 3,5, 5]
// 物品的价值
let V = [ 300, 300, 350, 400, 500]
// 背包承受总重
let T = 10

/**
 * 这种方法本质上其实是对index1.js里方法的优化
 * 1方法中我们用了两个数组，分别代表上一行（prev）和当前行（current）
 * 但实际上我们完全可以只用一个数组来操作，本质上就是数组中的【元素替换】，其实大可不必再用另一个数组（prev）来做临时存储
 */

function foo() {
    let k = []

    for (let i = 0; i < T + 1; i++) {
        k.push(i < W[0] ? 0 : V[0])
    }

    for (let i = 1; i < W.length; i++) {
        /**
         * 注意这里的倒序循环
         * 为什么要用倒序？注意 j - W[i] 这里，假设我们用正序循环，j - W[i]是一定会出现负数的
         * 我们在解法1中是有if (j < W[i]) 的判断的，假设判断成立其实k中对应的那个元素是不用变化的
         * 假设用正序循环，循环的终止条件必然是 j < T + 1，完全没有办法避免j - W[i] < 0的情况
         * 所以这里我们采用倒序，循环的终止条件其实就是j > W[i]，那对于j < W[i]的情况怎么办？
         * 其实我们刚刚已经说过了 如果j < W[i]，k中的元素是不用变化的，解法1中只不过是将这种不用替换写成了一个等价交换：current[j] = prev[j] 意思是一样的
         */
        for (let j = T; j > W[i]; j--) {
            k[j] = Math.max(k[j], k[j - W[i]] + V[i])
        }
        // console.log(k)
    }
    return k[T]
}

console.time('运行时间')
console.log(foo())
console.timeEnd('运行时间')