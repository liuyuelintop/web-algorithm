// In-Place QuickSort
// TODO: Select the first element as the pivot

/**
 * Quicksort function that sorts an array of numbers in ascending order.
 * @param {number[]} arr - The array to sort.
 * @param {number} left - The starting index of the array segment to sort.
 * @param {number} right - The ending index of the array segment to sort.
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right); // Get the pivot index
    quickSort(arr, left, pivotIndex - 1); // Recursively apply to the left subarray
    quickSort(arr, pivotIndex + 1, right); // Recursively apply to the right subarray
  }
  return arr;
}
// TODO: watch: https://www.youtube.com/watch?v=MZaf_9IZCrc
/**
 * Partitions the array around a pivot element, ensuring all elements less than the pivot
 * are moved to its left, and all elements greater are moved to its right. The function
 * returns the new index of the pivot element after partitioning.
 *
 * @param {number[]} arr - The array to partition.
 * @param {number} left - The start index for the partition.
 * @param {number} right - The end index for the partition where the pivot is initially placed.
 * @returns {number} The index of the pivot element after partitioning.
 *
 * The partitioning process involves two indices, `i` and `j`:
 * - `i` starts one position left of the 'left' index and moves right each time an element less than
 *   the pivot is found, serving as a marker for where elements less than the pivot should be swapped to.
 * - `j` iterates from the 'left' index to one less than the 'right' index, checking if elements are less
 *   than the pivot and swapping them with the position `i` indicates if necessary.
 * After all elements have been inspected, the pivot is swapped with the position just after the last
 * confirmed position of `i`, effectively placing the pivot in its correct sorted position.
 */
function partition(arr, left, right) {
  const pivot = arr[left]; // Using the first element as the pivot
  let i = right + 1; // Initializing `j` to the right of the end of the array segment

  for (let j = right; j > left; j--) {
    // `j` traverses the array from right to left-1
    if (arr[j] > pivot) {
      i--; // Decrement `i` when a larger than pivot element is found
      swap(arr, i, j); // Swap the current element with the element at `i`
    }
  }
  swap(arr, i - 1, left); // Place the pivot in its correct position
  return i - 1; // Return the new index of the pivot
}

/**
 * Swaps two elements in an array.
 * @param {number[]} arr - The array containing the elements.
 * @param {number} i - The index of the first element.
 * @param {number} j - The index of the second element.
 */
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]; // Utilizing ES6 feature destructuring assignment
}

// Example usage:
const arr = [4, 1, 6, 9, 3, 2, 8, 7];

quickSort(arr);
console.log(arr);
