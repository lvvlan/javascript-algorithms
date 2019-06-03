// 回溯动态规划表 打印所有最长公共子串
function printLCS(dp, str1, str2, max){
    let len1 = str1.length
    let len2 = str2.length
    let r = []

    for (let i = len1; i >= max; i--) {
        for (let j = len2; j >= max; j--) {
            if (dp[i][j] === max) {
                r.push(i - max)
            }
        }
    }

    return r.map(n => str1.substr(n, max))
}

function LCS(s1, s2) {
    let dp = (new Array(s1.length + 1)).fill().map(() => [0])
    dp[0] = (new Array(s2.length + 1)).fill(0)
    
    let maxLen = maxIndex = 0
    for (let i = 1; i < s1.length + 1; i++) {
        for (let j = 1; j < s2.length + 1; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
                if (dp[i][j] >= maxLen) {
                    maxLen = dp[i][j]
                    maxIndex = i - maxLen
                }
            } else {
                dp[i][j] = 0
            }
        }
    }

    // return {
    //     dp,
    //     LCS: s1.substr(maxIndex, maxLen)
    // }

    return {
        dp,
        LCS: printLCS(dp, s1, s2, maxLen)
    }
}

console.log(LCS('13456778', '357486782'))
console.log(LCS('acdefggh', 'cegdhfghb'))
console.log(LCS('1375168', '136168'))