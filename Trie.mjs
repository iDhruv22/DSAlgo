import TRINode from "./TRINode.mjs";

class Trie {
  root = new TRINode("");

  getIndex = (char) => char.charCodeAt() - "a".charCodeAt(0);

  hasChildren = node => node.children.some(el => el != null)

  insert = (word) => {
    let i = 0;
    let n = word.length;

    function insertHelper(node) {
      if (i < n) {
        let index = this.getIndex(word[i]);
        if (node.children[index] == null) {
          node.children[index] = new TRINode(word[i]);
        }
        i++;
        insertHelper.call(this, node.children[index])
      } else {
        node.markAsLeaf();
      }
    }

    insertHelper.call(this, this.root);
  }

  delete = word => {
    /**
     *                           root
     *                             t
     *                             h
     *                             e    *
     *                             i
     *                             r    *
     */
    function deleteHelper(node, n, i) {
      let isNodeDelete = false;
      /** Reached the last node of the given word */
      if (i === n) {
        /** If the last node has a children then just unmark it as a leaf node of the word */
        if (this.hasChildren(node)) {
          node.unMarkAsLeaf();
        } else {
          /** else remove it */
          node = null;
          isNodeDelete = true;
        }
      } else {
        let childrenNode = node.children[this.getIndex(word[i])]
        let isChildRemoved = deleteHelper.call(this, childrenNode, n, i + 1);
        /** If the child of the current node has been removed */
        if (isChildRemoved) {
          node.children[this.getIndex(word[i])] = null;

          /** if the current node is a end leaf for some other node then we cant remove it */
          if (node.isEndWord) {
            isNodeDelete = false;
          } else if (this.hasChildren(node)) {
            isNodeDelete = false;
          } else {
            /** check for other child if there is no child exists for current node then remove the current node as well */
            node = null;
            isNodeDelete = true;
          }
        } else {
          isNodeDelete = false;
        }
      }

      return isNodeDelete;
    }

    deleteHelper.call(this, this.root, word.length, 0);
  }

  print = () => {
    function printHelper(node) {
      if (node != null) {
        node.children.filter(el => el != null).forEach(element => {
          console.log(` ${element.char}  ${element.isEndWord ? "*":""}`);
          printHelper(element);
        });
      }
    }
    printHelper(this.root);
  }

}

export default Trie;