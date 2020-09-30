function quickSort(arr) {

  function swap(from, to) {
    let temp = arr[from];
    arr[from] = arr[to];
    arr[to] = temp;
  }

  function partition(start, end) {
    let pivot = arr[end];
    let i = start;

    /**
     *        input: [4,3,1,2]
     *
     *
     *        1. take last element as a pivot
     *           [4,3,1,(2)] - here 2 is pivot
     *        2. find element which are less than pivot and swap them
     *
     *            i
     *           [4,3,1,(2)]              if value is less than pivot then increment then swap it and go for next element
     *            j
     *
     *            i
     *           [4,3,1,(2)]
     *              j
     *
     *            i
     *           [4,3,1,(2)]
     *                j
     *
     *
     *              i
     *           [1,3,4,(2)]
     *                  j
     *
     *        3. now all the elements which are less than pivot are left side and pointer i
     *           reached at it place.
     *        4. now replace it with the pivote
     */





    for (let j = start; j < end; j++) {
      if (arr[j] < pivot) {
        swap(i, j);
        i++;
      }
    }

    swap(i, end);

    return i;
  }

  function quickSortHelper(start, end) {
    if (start < end) {
      let middle = partition(start, end);
      quickSortHelper(start, middle - 1);
      quickSortHelper(middle + 1, end);
    }
  }

  quickSortHelper(0, arr.length - 1);

  return arr;
}

export default quickSort;