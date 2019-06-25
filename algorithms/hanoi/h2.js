function hanoi(n , arrA, arrB, arrC) {
    let loop = new Array(arrA, arrB, arrC)
    // 用于定位奇偶
    let x = n % 2 != 0 ? 2 : 1
    // 移动次数
    let count = 2 ** n - 1
    // 一号盘的位置
    let firstPlate = 0

    console.log('start: ', ...loop)

    while(count != 0) {
        loop[(firstPlate + x) % 3].unshift(loop[firstPlate].shift())
        // 更新一号盘位置
        firstPlate = (firstPlate + x) % 3
        count--

        if (count !== 0) {
            // 另外两个盘子如何移动

            /**
             * 1号盘子的后第1个位置为空，或者无空位置且1号盘子后第2个位置编号较小，此时将1号盘子后第2个位置的盘子移动到1号盘子后第1个位置上
             * 1号盘子的后第2个位置为空，或者无空位置且1号盘子后第1个位置编号较小，此时将1号盘子后第1个位置的盘子移动到1号盘子后第2个位置上  
             */
            if (
                loop[(firstPlate + 1) % 3].length === 0 ||
                loop[(firstPlate + 2) % 3].length !== 0 &&
                loop[(firstPlate + 2) % 3][0] < loop[(firstPlate + 1) % 3][0]
            ) {
                loop[(firstPlate + 1) % 3].unshift(loop[(firstPlate + 2) % 3].shift())
            } else {
                loop[(firstPlate + 2) % 3].unshift(loop[(firstPlate + 1) % 3].shift())
            }
            count--
        }
    }

    console.log('end: ', ...loop)
}


hanoi(4, [1,2,3,4], [], [])