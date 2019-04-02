// 总共有多少种方法
let total = 0
// 当前排列 (index = row; ele = col)
let c = []
// 皇后个数
let n = Number(process.argv[2])

const queen = function (row = 0) {
    for (let col = 0; col < n; col++) {
        c[row] = col
        if (check(row)) continue
        if (row === n -1) {
            total++
        }else {
            queen(row + 1)
        }
    }
}

const check = function (row) {
    for (let i = 0; i < row; i++){
        // 纵向
        // console.log('row: ', row, 'i: ', i, 'c[row]: ', c[row], 'c[i]: ', c[i], c)
        if (c[row] === c[i]) return true
        // 斜向相减
        if (c[row] - row === c[i] - i) return true
        // 斜向相加
        if (c[row] + row === c[i] + i) return true
    }
    return false
}

console.time('运行时间')
queen()
console.timeEnd('运行时间')

console.log('棋盘: ', `${n} * ${n}`, '解法: ', total)