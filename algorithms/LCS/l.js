function printLCS(dp, str1, str2, i, j){
    if (i === 0 || j === 0){
        return ""
    }
    if(str1[i-1] === str2[j-1]){
        // let tmp = printLCS(dp, str1, str2, i-1, j-1)
        // console.log(tmp, str1, str1[i - 1], i)
        // return tmp + str1[i-1]
        return printLCS(dp, str1, str2, i-1, j-1) + str1[i - 1]
    }else{
        if (dp[i][j-1] > dp[i-1][j]){
            return printLCS(dp, str1, str2, i, j-1)
        }else{
            return printLCS(dp, str1, str2, i-1, j)
        }
    }
}

function printAllLCS(dp, str1, str2, i, j){
    if (i === 0 || j === 0){
        return [""]
    }
    if(str1[i-1] === str2[j-1]){
        let arr = []
        // let tmp = printAllLCS(dp, str1, str2, i-1, j-1)
        // tmp.forEach(s => arr.push(s + str1[i - 1]))
        // console.log('aaa => ', tmp, arr)
        printAllLCS(dp, str1, str2, i-1, j-1).forEach(s => arr.push(s + str1[i - 1]))
        return arr
    }else{
        let arr = []
        // console.log(printAllLCS(dp, str1, str2, i, j-1))
        if (dp[i][j-1] >= dp[i-1][j]){
            // let tmp = printAllLCS(dp, str1, str2, i, j-1)
            // tmp.forEach(s => arr.push(s))
            // console.log('bbb => ', tmp, arr)
            printAllLCS(dp, str1, str2, i, j-1).forEach(s => arr.push(s))
        }
        if (dp[i][j-1] <= dp[i-1][j]){
            // let tmp = printAllLCS(dp, str1, str2, i-1, j)
            // tmp.forEach(s => arr.push(s))
            // console.log('ccc => ', tmp, arr)
            printAllLCS(dp, str1, str2, i-1, j).forEach(s => arr.push(s))
        }
        return Array.from(new Set(arr))
    }
}

function LCS(s1, s2) {
    let dp = (new Array(s1.length + 1)).fill().map(() => [0])
    dp[0] = (new Array(s2.length + 1)).fill(0)
    let s = ''
    for (let i = 1; i < s1.length + 1; i++) {
        for (let j = 1; j < s2.length + 1; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    // console.log(dp)
    s = printAllLCS(dp, s1, s2, s1.length, s2.length)
    console.log(s)
    return dp
}

// LCS('13456778', '357486782')
LCS('acdefggh', 'cegdhfghb')
// LCS('135', '153')