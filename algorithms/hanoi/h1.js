function print(n, from, to) {
    console.log(`将${n}号盘从 ${from} 移动到 ${to}`)
}

let h = function (n, a, b, c) {
    if (n > 0) {
        h(n - 1, a, c, b)

        print(n, a, c)

        h(n - 1, b, a, c)
    }
}

// h(3, 'A', 'B', 'C')

function move(n, f, a, t) {
    let el = f.shift()
    t.unshift(el)
    // console.log(n, f, a, t)
}

let hanoi = function (n, arrA, arrB, arrC) {
    if (n > 0) {
        hanoi(n - 1, arrA, arrC, arrB)

        move(n, arrA, arrB, arrC)

        hanoi(n - 1, arrB, arrA, arrC)
    }
}

console.time('15阶汉诺塔递归解法运行时间: ')
hanoi(15, [1, 2, 3,5,6,7,8,9,10,11,12,13,14,15], [], [])
console.timeEnd('15阶汉诺塔递归解法运行时间: ')
