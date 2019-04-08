// 物品的重量
let W = [3, 3, 4, 5, 5]
// 物品的价值
let V = [ 300, 350, 300, 400, 500]
// 背包承受总重
let T = 10
let test = []

function foo() {
    let k = []

    for (let i = 0; i < T + 1; i++) {
        k.push(Math.floor(i / W[0]) * V[0])
    }
    console.log(k)
    for (let i = 1; i < 2; i++) {
        for (let j = W[i]; j < T + 1; j++) {
            // if (j === 7) {
            //     console.log(
            //         k, j, i, '---',
            //         k[j], k[j - W[i]] + V[i], '^^^',
            //         k[j - W[i]], V[i]
            //     )
            // }
            
            k[j] = Math.max(k[j], k[j - W[i]] + V[i])
        }
        console.log(k)
    }

    return k[T]
}

// function foo() {
//     let prev = []
//     let current = []

//     // 第一行
//     for(let i = 0; i < T + 1; i++){
//         prev.push(Math.floor(i / W[0]) * V[0])
//     }
//     test.push([...prev])
//     for (let i = 1; i < W.length; i++) {
//         for (let j = W[i]; j < T + 1; j++) {
//             current[j] = Math.max(prev[j], prev[j - W[i]] + V[i])
//         }
//         test.push([...current])
//         for (let j = 0; j < T + 1; j++) {
//             prev[j] = current[j]
//         }
        
//     }
//     console.log(test)
//     return current[T]
// }

console.time('运行时间')
console.log(foo())
console.timeEnd('运行时间')