class TRINode {
  constructor(char) {
    this.char = char;
  }

  children = Array(26).fill(null);
  isEndWord = false;

  markAsLeaf = () => this.isEndWord = true;
  unMarkAsLeaf = () => this.isEndWord = false;
}

export default TRINode;