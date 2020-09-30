class Stack {
  items = [];
  top = undefined;

  push = value => {
    this.items[this.items.length] = value;
    this.top = this.items[this.items.length - 1];
  }

  pop = () => {
    let element = this.items[this.items.length - 1];
    this.items = this.items.slice(0, this.items.length - 1);
    this.top = this.items[this.items.length - 1];
    return element;
  }

  isEmpty = () => this.items.length === 0;
}

export default Stack;