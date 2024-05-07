# QuickSort

## Version 1: Simple Recursive Quicksort

### Approach

- This version employs a very intuitive approach to quicksort. It first selects the first element of the array as the pivot (leader), then creates two empty arrays `left` and `right` to store elements smaller and larger than the pivot, respectively.
- It recursively calls itself to sort the `left` and `right` arrays and finally merges and returns the sorted arrays with the pivot element.

### Parameters

- The `quickSort` function in this version only takes one parameter, the array `arr` that needs to be sorted.

### Advantages

- **Simplicity and Clarity**: This implementation is straightforward, making it easy to understand and learn, particularly suitable for beginners.
- **No extra parameters needed**: It automatically handles the entire array without requiring boundary specifications.

### Disadvantages

- **High space complexity**: New arrays are created on each recursive call, which consumes significant memory.
- **Efficiency concerns**: Due to multiple array copying and merging, it might be less efficient when dealing with large datasets.

## Version 2: Optimized In-Place Quicksort

Tutorial video for beginners to better understand the In-Place QuickSort approach:

[ KC Ang: Quick Sort Partioning an array](https://www.youtube.com/watch?v=MZaf_9IZCrc)

### Approach

- This version uses a helper `partition` function to perform an in-place sort, eliminating the need for additional array space. It chooses the last element as the pivot, and through swapping, positions elements less than the pivot on the left and greater on the right.
- It continuously recursively calls itself to handle parts of the array to the left and right of the pivot.

### Parameters

- `arr`: The array to be sorted.
- `left` and `right`: These parameters define the starting and ending indices of the current segment of the array being handled.

### Advantages

- **High space efficiency**: No extra arrays are created, reducing memory consumption.
- **More suitable for large data volumes**: As an in-place sort, it's more efficient when handling large datasets.

### Disadvantages

- **Higher code complexity**: More complex than the first version, especially the `partition` function, which might not be as intuitive for beginners.
- **Less beginner-friendly**: Requires understanding how to swap elements in place and manage recursion boundaries.

## Conclusion

Both versions of quicksort have their own strengths. The first version is more suited for educational purposes and understanding the fundamental concepts of quicksort, while the second version is better suited for practical applications, especially when dealing with large datasets where its optimized space and time efficiency can provide significant performance benefits.
