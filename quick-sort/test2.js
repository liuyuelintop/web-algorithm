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
 * Helper function to partition the array around the pivot element.
 * @param {number[]} arr - The array to partition.
 * @param {number} left - The start index for the partition.
 * @param {number} right - The end index for the partition.
 * @returns {number} The index of the pivot element after partitioning.
 */
function partition(arr, left, right) {
  const pivot = arr[right]; // Use the last element as the pivot
  let i = left - 1; // Place for the next pivot

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j); // Swap elements that are less than the pivot
    }
  }
  swap(arr, i + 1, right); // Place the pivot element in the correct slot
  return i + 1;
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
const array = [10, 7, 8, 9, 1, 5];
quickSort(array);
console.log(array);
