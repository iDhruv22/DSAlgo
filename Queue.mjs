class Queue {
  items = []

  enqueue = item => {
    this.items.push(item); // 1
  }

  dequeue = () => {
    return this.items.shift();
  }

  getFront = () => {
    return this.items[this.items.length - 1];
  }
}

export default Queue;