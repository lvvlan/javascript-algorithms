function LCS(s1, s2) {
    let dp = (new Array(s1.length + 1)).fill().map(() => [0])
    dp[0] = (new Array(s2.length + 1)).fill(0)
    for (let i = 1; i < s1.length + 1; i++) {
        for (let j = 1; j < s2.length + 1; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    console.log(dp)
    return dp
}

LCS('13456778', '357486782')