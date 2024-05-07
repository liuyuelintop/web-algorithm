// bubble sort
// 排序的本质是比较和交换

var arr = [4, 1, 6, 9, 3, 2, 8, 7];
// compare

/**
 * Compares two numbers and returns true if the first number is greater than the second.
 * @param {number} a - The first number to compare.
 * @param {number} b - The second number to compare.
 * @returns {boolean} - True if the first number is greater than the second, false otherwise.
 */
function compare(a, b) {
  return a > b;
}
// swap
/**
 * Swaps the elements at the specified indices in the specified array.
 * @param {number[]} arr - The array to swap elements in.
 * @param {number} i - The index of the first element to swap.
 * @param {number} j - The index of the second element to swap.
 */
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]; // destructuring assignment
}

// sort

/**
 * Sorts the specified array in ascending order.
 * @param {number[]} arr - the array to sort
 */
function sort(arr) {
  if (arr == null || arr.length == 0) return; // If the array is empty, return immediately as it's already sorted.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1])) {
        // If the current element is greater than the next one, swap them.
        swap(arr, j, j + 1);
      }
    }
  }
}
sort(arr);
console.log(arr);
