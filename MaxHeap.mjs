class MaxHeap {
  heap = [];

  get length() {
    return this.heap.length;
  }

  hasParent = index => this.getParentIndex(index) >= 0

  hasRightChild = index => this.getRightChildIndex(index) <= this.length - 1;

  hasLeftChild = index => this.getLeftChildIndex(index) <= this.length - 1;

  getParentIndex = index => Math.floor(((index - 1) / 2))

  getLeftChildIndex = index => (2 * index) + 1

  getRightChildIndex = index => (2 * index) + 2

  swap = (a, b) => {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  __percolateUp = index => {
    /**
     * if the index has parent and it is less than index then swap the values of current index
     * and the parent index. Now check same thing for the parent index.
     */
    if (this.hasParent(index)) {
      let parentIndex = this.getParentIndex(index);
      let parent = this.heap[this.getParentIndex(index)];
      let current = this.heap[index];

      if (parent < current) {
        this.swap(parentIndex, index);
        this.__percolateUp(parentIndex);
      }
    }
  }

  insert(item) {
    // add the item at the last
    const index = this.heap.push(item) - 1;
    this.__percolateUp(index)
  }

  __maxHeapify = index => {
    /**
     * swap the current index value with the largest value between the left and right child, if
     * the current index is less than the value of either left or right child
     */

    let currentValue = this.heap[index];
    let hasLeftChild = this.hasLeftChild(index);
    let hasRightChild = this.hasRightChild(index);

    let leftIndex = this.getLeftChildIndex(index);
    let rightIndex = this.getRightChildIndex(index);
    let leftValue = this.heap[leftIndex];
    let rightValue = this.heap[rightIndex];

    if (hasLeftChild || hasRightChild) {
      /** If node has both the elements then maxHeapify for largest element */
      if (hasLeftChild && hasRightChild) {
        /** if both the elements are same and value of either of element is greater than
         * than the value of the current element then swap both of them and maxheapify with the left
         * or right index
         */
        if (leftValue == rightValue) {
          if (leftValue > currentValue) {
            this.swap(index, leftIndex);
            this.__maxHeapify(leftValue);
          }
        } else if (leftValue > rightValue) {
          if (leftValue > currentValue) {
            this.swap(index, leftIndex);
            this.__maxHeapify(leftValue);
          }
        } else {
          if (rightValue > currentValue) {
            this.swap(index, rightIndex);
            this.__maxHeapify(rightIndex);
          }
        }
      } else if (this.hasLeftChild(index)) {
        if (leftValue > currentValue) {
          this.swap(index, leftIndex);
          this.__maxHeapify(leftValue);
        }
      } else if (this.hasRightChild(index)) {
        if (rightValue > currentValue) {
          this.swap(index, rightIndex);
          this.__maxHeapify(rightIndex);
        }
      }
    }
  }

  getMax = () => this.heap[0];

  removeMax = () => {
    /** if the heap has element then replace it with last element and run max heapify */
    if (this.heap.length > 0) {
      let front = this.heap[0];
      this.swap(0, this.heap.length - 1);
      this.heap.pop();
      this.__maxHeapify(0);
      return front;
    }
  }
}

export default MaxHeap;