let n = Number(process.argv[2])

let shu = (new Array(n)).fill(0)
let pie = (new Array(2 * n - 1)).fill(0)
let na = (new Array(2 * n - 1)).fill(0)


let total = 0

const queen = function (row = 0) {
    for (let col = 0; col < n; col++) {
        let j = row + col
        let k = row - col
        // 检测 列/左右斜线 是否有冲突
        if (shu[col] || pie[j] || na[k]) continue

        if (row === n - 1) {
            total += 1
        } else {
            // 标识 当前皇后
            shu[col] = 1
            pie[j] = 1
            na[k] = 1
            queen(row + 1)
            // 标识清除
            shu[col] = 0
            pie[j] = 0
            na[k] = 0
        }
    }
}

console.time('运行时间')
queen()
console.timeEnd('运行时间')

console.log('棋盘: ', `${n} * ${n}`, '解法: ', total)