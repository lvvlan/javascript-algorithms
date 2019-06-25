function sleep(s) {
    return new Promise(function(res, rej) {
        setTimeout(res, s)
    })
}

async function move(n, f, a, t) {
    let el = f.shift()
    t.unshift(el)
    await sleep(2000)
    // console.log(n, f, a, t)
    return Promise.resolve
}

export let hanoi = async function (n, arrA, arrB, arrC) {
    if (n > 0) {
        await hanoi(n - 1, arrA, arrC, arrB)

        await move(n, arrA, arrB, arrC)
        // console.log(n, arrA, arrC, arrB)

        await hanoi(n - 1, arrB, arrA, arrC)
    }
}

hanoi(3, [1, 2, 3], [], [])