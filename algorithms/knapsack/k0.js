// 物品的重量
let W = [5, 5, 3, 4, 3,5, 5, 3, 4, 3]
// 物品的价值
let V = [100, 500, 300, 300, 350,100, 500, 300, 300, 350]
// 背包承受总重
let TW = 10

// 最优子结构
// F(w, t) = Max(F(w - 1, t), F(w - 1, TW - w[last]) + v[last])

// 边界
/**
 * 1. 只有一个物品，且物品的重量小于背包重量：F(w, t) = w[0]
 * 2. 只有一个物品，且物品的重量大于背包重量：F(w, t) = 0
 * 3. 物品数量大于1，且最后一个物品占用重量小于背包总重：F(w, t) = Max(F(w - 1, t), F(w - 1, TW - w[last]) + v[last])
 * 4. 物品数量大于1，且最后一个物品占用重量大于背包总重：F(w, t) = F(w - 1, t)
 */

function foo(w, v, t) {
    // console.log(w, v, t)
    if (w.length === 1 && w[0] <= t) return v[0]
    if (w.length === 1 && w[0] > t) return 0

    if (w.length > 1, w[w.length - 1] <= t) {

        let arrW = [...w]
        let lastW = arrW.pop()
        let arrV = [...v]
        let lastV = arrV.pop()
        let a = foo(arrW, arrV, t);
        let b = foo(arrW, arrV, t - lastW) + lastV
        // console.log(w, v, a, b, lastV, t)
        return Math.max(a, b)
    }

    if (w.length > 1 && w[w.length - 1] > t) {
        w.pop()
        v.pop()

        return foo(w, v, t)
    }

}

console.time('运行时间')
console.log(foo(W,V,TW))
console.timeEnd('运行时间')
// foo(W,V,TW)