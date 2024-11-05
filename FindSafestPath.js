function findSafestPath(dream) {
    const dp = Array.from({ length: dream.length }, () => Array.from({ length: dream[0].length }, () => 0))
    dp[0][0] = dream[0][0]
    for (let i = 1; i < dream.length; i++) {
        dp[i][0] = dp[i - 1][0] + dream[i][0]
    }
    for (let j = 1; j < dream[0].length; j++) {
        dp[0][j] = dp[0][j - 1] + dream[0][j]
    }
    for (let i = 1; i < dream.length; i++) {
        for (let j = 1; j < dream[0].length; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + dream[i][j]
        }
    }
    return dp[dream.length - 1][dream[0].length - 1]
}

const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
]  
const bestPath = findSafestPath(dream) // Devuelve 7