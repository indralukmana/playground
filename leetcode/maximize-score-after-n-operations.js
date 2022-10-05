/****
You are given nums, an array of positive integers of size 2 * n. You must perform n operations on this array.

In the ith operation (1-indexed), you will:

Choose two elements, x and y.
Receive a score of i * gcd(x, y).
Remove x and y from nums.
Return the maximum score you can receive after performing n operations.

The function gcd(x, y) is the greatest common divisor of x and y.
 */
const maxScore = function (nums) {
  const n = nums.length;
  const dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      dp[i][j] = gcd(nums[i], nums[j]);
    }
  }
  const memo = new Map();

  const dfs = (mask, i) => {
    if (i === 0) return 0;
    if (memo.has(mask)) return memo.get(mask);
    let ans = 0;
    for (let j = 0; j < n; j++) {
      if (mask & (1 << j)) {
        for (let k = j + 1; k < n; k++) {
          if (mask & (1 << k)) {
            ans = Math.max(
              ans,
              i * dp[j][k] + dfs(mask ^ (1 << j) ^ (1 << k), i - 1)
            );
          }
        }
      }
    }
    memo.set(mask, ans);
    return ans;
  };
  return dfs((1 << n) - 1, n / 2);
};
