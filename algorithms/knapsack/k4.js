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
        k.push(Math.floor(i / W[0]) * V[0])
    }
    console.log(k)
    for (let i = 1; i < W.length; i++) {
        for (let j = W[i]; j < T + 1; j++) {
            k[j] = Math.max(k[j], k[j - W[i]] + V[i])
        }
        console.log(k)
    }
}

console.time('运行时间')
console.log(foo())
console.timeEnd('运行时间')