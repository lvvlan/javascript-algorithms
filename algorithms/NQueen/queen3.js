let n = Number(process.argv[2])

let pie = 0
let shu = 0
let na = 0

let total = 0

const queen = function (row = 0) {
    for (let col = 0; col < n; col++) {
        let j = row + col
        let k = row - col + n - 1 // 不会出现负数

        if (((shu >> col) | (pie >> j) | (na >> k)) & 1) continue

        if (row === n - 1) {
            total += 1
        } else {
            shu |= (1 << col)
            pie |= (1 << j)
            na |= (1 << k)
            queen(row + 1)
            shu &= ~(1 << col)
            pie &= ~(1 << j)
            na &= ~(1 << k)
        }
    }
}

console.time('运行时间')
queen()
console.timeEnd('运行时间')

console.log('棋盘: ', `${n} * ${n}`, '解法: ', total)
