import HashEntry from "./HashEntry.mjs";

class HashTable {
  size = 0;
  thresold = 0.6;

  constructor(slots) {
    this.slots = slots;
    this.bucket = Array(slots).fill(null);
  }

  keyIndex = (key) => key % this.slots;

  get size() {
    return this.size;
  }

  resize() {
    /** copy old bucket in to new one and empty the old one */
    this.newBucket = [...this.bucket].filter(el => el != null).map(({
      key,
      value
    }) => new HashEntry(key, value));
    this.size = 0;
    this.slots *= 2; /** double the size of the bucket */
    this.bucket = [];

    /** run through all the value of the bucket */
    for (const node of this.newBucket) {
      let start = node;
      /** take all the key value from the linkedlist and insert it again with new key */
      while (start != null) {
        let {
          key,
          value
        } = start;
        this.insert(key, value);
        start = start.next;
      }
    }
  }

  insert(key, value) {
    /**
     *  insertHelper(node, key, value):
     *    1. get the index
     *    2. if: node == null
     *         node = new HashEntry(key, value);
     *    3. else:
     *         insert.next = insert(node, key, value);
     *     return node
     */

    function insertHelper(node) {
      if (node == null) {
        node = new HashEntry(key, value);
      } else if (node.key === key) {
        node.value = value;
      } else {
        node.next = insertHelper(node.next);
      }

      return node;
    }

    let keyIndex = this.keyIndex(key);
    this.bucket[keyIndex] = insertHelper(this.bucket[keyIndex]);
    this.size++;

    /** if the size of the bucket increases the thresold then resize the bucket */
    if ((Number(this.size) / Number(this.slots)) >= this.thresold) {
      this.resize();
    }
  }

  search = (key) => {
    /** walk through all the values of the linkedlist */
    function searchHelper(node) {
      if (node == null) return false;
      if (node.key === key) return node;
      return searchHelper(node.next);
    }

    /** walk through all the keys of the bucket */
    for (const node of this.bucket) {
      let item = searchHelper(node);
      /** if found return it */
      if (item) {
        return item;
      }
    }

    /** else false */
    return false;
  }
}

export default HashTable;