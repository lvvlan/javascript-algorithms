let n = Number(process.argv[2])

let shu = 0
let pie = 0
let na = 0

let total = 0

function cl(n) {
    let r = ''
    for(let i = 0; i<n; i++) {
        r+='0'
    }
    return r
}

function bl(s, n = 4) {
    if (n <= s.length) return s
    return cl(n - s.length) + s
}

const queen = function (row = 0) {
    let ava = ((1 << n) - 1) & (~(shu | (pie >> row) | (na >> (n - 1 - row))))

    while (ava) {
        let p = ava & -ava
        
        ava ^= p
        
        if (row === n - 1) {
            total += 1
        } else {
            shu ^= p
            pie ^= (p << row)
            na ^= (p << (n - 1 - row))
            // console.log(
            //     'shu: ', bl(shu.toString(2)),
            //     'pie: ', bl(pie.toString(2), 2 * n - 1),
            //     'na: ', bl(na.toString(2), 2 * n - 1)
            // )
            queen(row + 1)
            shu ^= p
            pie ^= (p << row)
            na ^= (p << (n - 1 - row))
        }
    }
}

console.time('运行时间')
queen()
console.timeEnd('运行时间')

console.log('棋盘: ', `${n} * ${n}`, '解法: ', total)