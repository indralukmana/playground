/***
 You're a new Amazon Software Development Engineer (SDE). You've been asked to evaluate the efficiency of an old sorting algirthm.
  The following algorithm is used to sorst an array of distinct `n` intgers.
  For the input array `arr` of size `n`, do the following:

  try to find the smallest pair of indices:

  0 <= i < j < n - 1

  such that `arr[i] > arr[j]`. Here 'smallest' means usual alphabetical ordering of pairs, i.e. (i_1, j_1) < (i_2, j_2) if and only if i_1 < i_2 or i_1 = i_2 and j_1 < j_2.

  If there is no such pair, the algorithm stops. Otherwise, it swaps `arr[i]` and `arr[j]` and continues.

  how efficient is this algorithm? Write a function that returns the number of swaps performed by the algorithm.

  For example, if the initial array is [5, 1, 4, 2] then your function should return 4. 
  The first swap turns the array into [1, 5, 4, 2]. 
  The second swap turns the array into [1, 4, 5, 2]. 
  The third swap turns the array into [1, 4, 2, 5]. 
  The final swap turns the array into [1, 2, 4, 5], which is sorted.

  Complete the function `howManySwaps` in the editor below. The function should return an integer that dentoes the number of swaps performed by the algorithm.
  The function has the following parameter(s):
  * arr: integer array of size `n` with all unique elements

  Constraints:
  * 1 <= n <= 10^5
  * 1 <= arr[i] <= 10^9
  * All elements in `arr` are distinct.
  
  Sample Input 0
  3
  7
  1
  2

  Sample Output 0
  2

  Explanation 0
  The initial array is [7, 1, 2]. 
  The first swap turns the array into [1, 7, 2].
  The second swap turns the array into [1, 2, 7], which is sorted.

  Sample Input 1
  2
  7
  12

  Sample Output 1
  0

  Explanation 1
  The initial array is [7, 12].
  The array is already sorted, so there are no swaps to perform.
  
 **/
export function howManySwaps(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        count++;
      }
    }
  }
  return count;
}
