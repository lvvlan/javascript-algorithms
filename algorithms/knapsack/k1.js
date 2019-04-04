// 物品的重量
let W = [3, 4, 3,5, 5]
// 物品的价值
let V = [ 300, 300, 350, 400, 500]
// 背包承受总重
let T = 10
let test = []

function foo() {
    let prev = []
    let current = []

    // 第一行
    for(let i = 0; i < T + 1; i++){
        if (i < W[0]) {
            prev.push(0)
        } else {
            prev.push(V[0])
        }
    }
    test.push([...prev])
    for (let i = 1; i < W.length; i++) {
        for (let j = 0; j < T + 1; j++) {
            if (j < W[i]) {
                current[j] = prev[j]
            } else {
                current[j] = Math.max(prev[j], (prev[j - W[i]] + V[i]))
            }
        }
        test.push([...current])
        for (let j = 0; j < T + 1; j++) {
            prev[j] = current[j]
        }
        
    }
    return current[T]
}

console.time('运行时间')
console.log(foo())
console.log(test)
console.timeEnd('运行时间')