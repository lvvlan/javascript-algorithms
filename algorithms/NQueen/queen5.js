let n = Number(process.argv[2])

let total = 0

function queen(row = 0, shu = 0, pie = 0, na = 0) {
    let ava = ((1 << n) - 1) & ~(shu | pie | na)

    while (ava) {
        let p = ava & -ava
        ava ^= p

        if (row === n - 1) {
            total += 1
        } else {
            queen(row + 1, shu | p, (pie | p) >> 1, (na | p) << 1)
        }
    }
}

console.time('运行时间')
queen()
console.timeEnd('运行时间')

console.log('棋盘: ', `${n} * ${n}`, '解法: ', total)