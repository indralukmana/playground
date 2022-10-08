/***

An Amazon Fullfillment associate has a set of items that need to be packed into two boxes. 
Given an integer array of the items weights (arr) to be packed, divide the item weights into two
subsets, A and B, for packing into the associated boxes, while respecting the following conditions:

- The intersection fo A and B is null.
- The union A and B is equal to the original array.
- The number of elements in subset A is minimal.
- The sum of A's weights is greater than the sum of B's weights.

Return the subset A in increasing order where the sum of A's weights is greater than the sum of B's weights.
If more than one subset A exists, return the one with the maximal total weight.

Example 
n = 5
arr = [3, 7, 5, 6, 2]

The 2 subsets in `arr` that satisfy the conditions for A ar [5, 7] and [6, 7]

- A is minimal (size 2)
- Sum(A) = (5 + 7) = 12 > Sum(B) = (2 + 3 + 6) = 11
- Sum(A) = (6 + 7) = 13 > Sumb(B) = (2 + 3 + 5) = 10
- The intersection of A and B is null and their union is equal to arr.
- The subset A where the sum of its weight is maximal is [6, 7]

Function Description
Complete the minimalHeaviestSetA function in the editor below.

minimalHeaviestSetA has the following parameter(s):
int arr[]: an integer array of the weights of each item in the set

Returns:
int[]: an integer array with the values of subset A

Constraints
- 1 <= n <= 10^5
- 1 <= arr[i] <= 10^5 (where 0 <= i < n)
 * */
function minimalHeaviestSetA(arr) {
  const sum = arr.reduce((a, b) => a + b);
  const half = Math.floor(sum / 2);
  const dp = Array(half + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = half; j >= arr[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - arr[i]] + arr[i]);
    }
  }
  const result = [];
  let j = half;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (j >= arr[i] && dp[j] === dp[j - arr[i]] + arr[i]) {
      result.push(arr[i]);
      j -= arr[i];
    }
  }
  return result;
}
