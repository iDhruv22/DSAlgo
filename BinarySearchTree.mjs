import TNode from "./TNode.mjs";
import Stack from "./Stack.mjs";

class BinarySearchTree {
  constructor(rootValue) {
    this.root = new TNode(rootValue); //the rootNode
  }

  insertI = val => {
    let currentNode = this.root;
    let parent = this.root;
    while (currentNode != null) {
      parent = currentNode;
      if (val <= currentNode.val) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }

    if (val <= parent.val) {
      parent.leftChild = new TNode(val);
    } else {
      parent.rightChild = new TNode(val);
    }
  }

  insert = val => {
    function insert_helper(rootNode) {
      if (rootNode === null) return new TNode(val);

      if (val <= rootNode.val) {
        rootNode.leftChild = insert_helper(rootNode.leftChild)
      } else {
        rootNode.rightChild = insert_helper(rootNode.rightChild)
      }

      return rootNode;
    }

    insert_helper(this.root);
  }

  preorderI() {
    let currentNode = this.root;
    let stack = new Stack();
    let result = [];
    stack.push(currentNode);

    while (!stack.isEmpty()) {
      let firstel = stack.top;
      while (firstel != null) {
        result.push(firstel.val);
        if (firstel.leftChild) {
          stack.push(firstel.leftChild);
        }
        firstel = firstel.leftChild;
      }

      let poppedEl;
      while (poppedEl = stack.pop()) {
        if (poppedEl.rightChild) {
          stack.push(poppedEl.rightChild);
          break;
        }
      }
    }

    return result.join("");
  }

  preorderI2() {
    let currentNode = this.root;
    let stack = new Stack();
    let result = [];
    stack.push(currentNode);

    while (!stack.isEmpty()) {
      let top = stack.pop();
      result.push(top.val);

      if (top.rightChild) {
        stack.push(top.rightChild)
      }

      if (top.leftChild) {
        stack.push(top.leftChild);
      }
    }

    return result.join("");
  }

  inorderI() {
    let currentNode = this.root;
    let stack = new Stack();
    let result = [];
    stack.push(currentNode);

    while (!stack.isEmpty()) {
      let top = stack.top;
      while (top != null) {
        if (top.leftChild) {
          stack.push(top.leftChild);
        }

        top = top.leftChild;
      }

      let poppedEl;
      while (poppedEl = stack.pop()) {
        result.push(poppedEl.val);
        if (poppedEl.rightChild) {
          stack.push(poppedEl.rightChild);
          break;
        }
      }
    }

    return result.join("");
  }

  postorderI() {
    let stack = new Stack();
    let result = new Stack();
    stack.push(this.root);

    while (!stack.isEmpty()) {
      let poppedEl = stack.pop();

      result.push(poppedEl.val);

      if (poppedEl.leftChild) {
        stack.push(poppedEl.leftChild)
      }
      if (poppedEl.rightChild) {
        stack.push(poppedEl.rightChild);
      }
    }

    console.log("BinarySearchTree -> postorderI -> result", result)

    while (!result.isEmpty()) {
      // console.log("BinarySearchTree -> postorderI -> result.pop()", result.pop())
      console.log(result.pop());
    }
  }

  searchI = el => {
    let currentNode = this.root;

    while (currentNode != null) {
      if (currentNode.val == el) {
        return true;
      }

      if (el < currentNode.val) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }

    return false;
  }

  search = el => {
    function searchHelper(node) {
      if (node === null) return false;
      if (node.val === el) return true;
      if (el < node.val) return searchHelper(node.leftChild);
      else return searchHelper(node.rightChild);
    }

    return searchHelper(this.root);
  }

  delete = val => {
    let currentNode = this.root;

    let parent = null;

    while (currentNode != null && (currentNode.val != val)) {
      parent = currentNode;
      if (val < currentNode.val) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }

    if (currentNode == null) {
      return false;
    } else if (currentNode.leftChild == null && currentNode.rightChild === null) { // if node to be delete is a leaf node
      if (currentNode.val === this.root.val) {
        this.root = null;
        return true;
      }

      if (currentNode.val < parent.val) {
        parent.leftChild = null;
      } else {
        parent.rightChild = null;
      }
      return true;
    } else if (currentNode.leftChild == null) {
      if (currentNode.val === this.root.val) {
        this.root = null;
        return true;
      }

      if (currentNode.val < parent.val) {
        parent.leftChild = currentNode.rightChild;
      } else {
        parent.rightChild = currentNode.rightChild;
      }

      return true;
    } else if (currentNode.rightChild == null) {
      if (currentNode.val === this.root.val) {
        this.root = null;
        return true;
      }

      if (currentNode.val < parent.val) {
        parent.leftChild = currentNode.leftChild;
      } else {
        parent.rightChild = currentNode.leftChild;
      }
      return true;
    } else {
      let temp = currentNode.rightChild;

      while (temp.leftChild != null) {
        temp = temp.leftChild;
      }

      this.delete(temp.val);
      currentNode.val = temp.val;
      return true;
    }
  }

  getTree() {
    return this.root;
  }
}

export default BinarySearchTree;