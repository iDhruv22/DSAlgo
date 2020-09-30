import Node from "./Node.mjs";

class LinkedList {

  head = null

  insertAtTail = data => {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let tempHead = this.head;
      while (tempHead.nextElement != null) {
        tempHead = tempHead.nextElement;
      }
      tempHead.nextElement = new Node(data);
    }
  }

  insertAtHead = data => {
    let newNode = new Node(data);
    newNode.nextElement = this.head;
    this.head = newNode;
  }

  delete = condition => {
    let head = this.head;
    let prev = null;
    while (head != null) {
      if (condition(head)) {
        if (prev) {
          prev.nextElement = head.nextElement;
        } else {
          this.head = head.nextElement;
        }
        return true;
      }

      prev = head;
      head = head.nextElement;
    }

    return false;
  }

  search = condition => {
    let start = this.head;
    while (start != null) {
      if (condition(start)) {
        return true;
      }
      start = start.nextElement;
    }
    return false;
  }
}

export default LinkedList;