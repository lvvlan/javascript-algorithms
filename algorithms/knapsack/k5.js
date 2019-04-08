// 物品的重量
let W = [3, 3, 4, 5, 5]
// 物品的价值
let V = [300, 350, 400, 400, 500]
// 每件物品个数
let N = [2, 3, 1, 2, 2]
// 背包承受总重
let T = 10

// 转化成01背包
function trans() {
    let r = {
        w: [],
        v: []
    }

    N.forEach((item, i) => {
        for (let j = 0; j < item; j++) {
            r.w.push(W[i])
            r.v.push(V[i])
        }
    })

    return r
}

let transK = trans()

console.log(transK)

function foo(w, v, t) {
    let k = []

    for (let i = 0; i < t + 1; i++) {
        k.push(i < w[0] ? 0 : v[0])
    }

    for (let i = 1; i < w.length; i++) {
        for (let j = t; j > w[i]; j--) {
            k[j] = Math.max(k[j], k[j - w[i]] + v[i])
        }
        // console.log(k)
    }
    return k[t]
}

console.time('运行时间')
console.log(foo(transK.w, transK.v, T))
console.timeEnd('运行时间')