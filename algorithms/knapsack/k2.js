// 物品的重量
let W = [3, 4, 3,5, 5]
// 物品的价值
let V = [ 300, 300, 350, 400, 500]
// 背包承受总重
let T = 10

/**
 * 这种思路其实就是将解法1中的过程记录下来，转换成一个二维数组
 */

function foo() {
    // k[n][m]：n代表加入背包的前n件物品，m代表背包的承重（实际上 n 代表行，m 代表列）
    let k = W.map(() => [])
    // 第一行
    for (let i = 0; i < T + 1; i++){
        if (i < W[0]) {
            k[0][i] = 0
        } else {
            k[0][i] = V[0]
        }
    }

    for (let i = 1; i < W.length; i ++) {
        for (let j = 0; j < T + 1; j ++) {
            if (W[i] > j) {
                k[i][j] = k[i - 1][j]
            } else {
                k[i][j] = Math.max(k[i - 1][j], k[i - 1][j - W[i]] + V[i])
            }
        }
    }

    console.log(k)
    return k[W.length - 1][T]
}

console.time('运行时间')
console.log(foo())
console.timeEnd('运行时间')
