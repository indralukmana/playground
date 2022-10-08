/***
 * 
 * NOT YET
 * 
 Given an array of predicted rainfall for next n days, where index i presents a day and day[i] represents the amount of rainfall on that day, return a list of ideal days such that -

day[i-k] >= day[i-k+1] >= ... day[i-1] >= day[i] <= day[i+1] ... <= day[i+k-1] <= day[i+k],

where k is given as an input which represents the number of days prior and after the current day.

As index represents day, while returning, we need to return i+1 as the actual day.

Ex:
day = [3,2,2,2,3,4]
k = 2
Output:
[3,4]

Explanation:

the rainfall trend for day3 (i = 2) is day1 >= day2 >= day3 <= day4 <= day5 so day3 is ideal
the rainfall trend for day4 (i = 3) is day2 >= day3 >= day4 <= day5 <= day6 so day4 is ideal

i <= k <= n <= 2x10^5
0 <= day[i] <= 10^9
 * */

function predictDays(days, k) {
  const result = [];
  for (let i = 0; i < days.length; i++) {
    let j = i - k;
    let isIdeal = true;
    while (j < i) {
      if (days[j] > days[j + 1]) {
        isIdeal = false;
        break;
      }
      j++;
    }
    if (isIdeal) {
      j = i + 1;
      while (j < i + k + 1) {
        if (days[j] > days[j - 1]) {
          isIdeal = false;
          break;
        }
        j++;
      }
    }
    if (isIdeal) {
      result.push(i + 1);
    }
  }
  return result;
}
