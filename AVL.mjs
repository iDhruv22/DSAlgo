import TANode from "./TANode.mjs";

class AVL {
  constructor() {
    this.root = null;
  }

  height = node => {
    if (node === null) return 0;
    return node.height;
  }

  balanceFactor = node => {
    if (node == null) return 0;
    return this.height(node.leftChild) - this.height(node.rightChild);
  }

  rotateRight = node => {
    let nodeLeft = node.leftChild;
    node.leftChild = nodeLeft.rightChild;
    nodeLeft.rightChild = node;

    node.height = Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;
    nodeLeft.height = Math.max(this.height(nodeLeft.leftChild), this.height(nodeLeft.rightChild)) + 1;

    return nodeLeft;
  }

  rotateLeft = node => {
    let nodeRight = node.rightChild;
    node.rightChild = nodeRight.leftChild;
    nodeRight.leftChild = node;

    node.height = Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;
    nodeRight.height = Math.max(this.height(nodeRight.leftChild), this.height(nodeRight.rightChild)) + 1;

    return nodeRight;
  }

  delete = val => {
    function deleteHelper(node, val) {
      if (node === null) return null;
      if (val < node.val) node.leftChild = deleteHelper.call(this, node.leftChild, val);
      else if (val > node.val) node.rightChild = deleteHelper.call(this, node.rightChild, val);
      else {
        if (node.leftChild == null && node.rightChild === null) { // if node to be delete is a leaf node
          node = null;
        } else if (node.leftChild == null) { // if left node is null
          node = node.rightChild
        } else if (node.rightChild == null) { // if right node is null
          node = node.leftChild;
        } else { // if node to be delete has both the node
          let temp = node.rightChild;
          while (temp.leftChild != null) {
            temp = temp.leftChild; // find the minimum element in right child and delete it
          }

          node.val = temp.val;
          node.rightChild = deleteHelper(node.rightChild, temp.val); // replace it with node
        }
      }

      if (node == null) return node;

      node.height = 1 + Math.max(this.height(node.leftChild), this.height(node.rightChild));

      let bf = this.balanceFactor.apply(this, [node]);

      if (bf > 1 && this.balanceFactor.apply(this, node.leftChild) >= 0) {
        return this.rotateRight(node);
      }

      if (bf > 1 && this.balanceFactor.apply(this, node.leftChild) < 0) {
        node.leftChild = this.rotateLeft(node.leftChild);
        return this.rotateRight(node);
      }

      if (bf < -1 && this.balanceFactor.apply(this, node.rightChild) <= 0) {
        return this.rotateLeft(node);
      }

      if (bf < -1 && this.balanceFactor.apply(this, node.rightChild) > 0) {
        node.rightChild = this.rotateRight(node.rightChild);
        return this.rotateLeft(node);
      }

      return node;
    }

    this.root = deleteHelper.call(this, this.root, val);
  }

  insert = val => {
    function insertHelper(node) {
      if (node === null) return new TANode(val);
      if (val < node.val) node.leftChild = insertHelper.call(this, node.leftChild);
      else if (val > node.val) node.rightChild = insertHelper.call(this, node.rightChild);
      else return node;

      node.height = 1 + Math.max(this.height(node.leftChild), this.height(node.rightChild));

      let bf = this.balanceFactor.apply(this, [node]);

      /* left-left
       *             (3) - node
       *              /
       *             /
       *           (2) - nodeLeft
       *           /
       *          /
       *        (1)
       */
      if (bf > 1 && val < node.leftChild.val) {
        return this.rotateRight(node);
      }

      /* left-right
       *             (5) - node
       *              /
       *             /
       *           (2) - nodeLeft
       *            \
       *             \
       *             (3)
       */
      if (bf > 1 && val > node.leftChild.val) {
        node.leftChild = this.rotateLeft(node.leftChild);
        return this.rotateRight(node);
      }

      /* right-right
       *             (1) - node
       *              \
       *               \
       *               (2) - rightNode
       *                \
       *                 \
       *                 (3)
       */
      if (bf < -1 && val > node.rightChild.val) {
        return this.rotateLeft(node);
      }

      /* right-left
       *             (5) - node
       *              \
       *               \
       *               (8) - rightNode
       *               /
       *              /
       *            (6)
       */
      if (bf < -1 && val < node.rightChild.val) {
        node.rightChild = this.rotateRight(node.rightChild);
        return this.rotateLeft(node);
      }

      return node;
    }

    this.root = insertHelper.apply(this, [this.root]);
  }
}

export default AVL;