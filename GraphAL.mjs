import LinkedList from "./LinkedList.mjs";

class Graph {

  list = [];

  doesVertexExists = vertex => this.list.some((_, index) => index === vertex)

  addEdge = (src, dst) => {
    // search source in the list, create it if not exists
    if (!this.doesVertexExists(src)) this.list[src] = new LinkedList();

    // search destination in the list, create it if not exists
    if (!this.doesVertexExists(dst)) this.list[dst] = new LinkedList();

    this.list[src].insertAtHead(dst);
  }

  removeEdge = (src, dst) => {
    this.list[src].delete(({
      data
    }) => data == dst);
  }

  addVertex = vertex => {
    this.list[vertex] = new LinkedList();
  }

  removeVertex = vertex => {
    // remove vertex from all the linkedlist in the list
    // mark it undefined on its place

    this.list.forEach((el, index) => {
      if (index === vertex) this.list[index] = undefined;
      el.delete(({
        data
      }) => data == vertex);
    })
  }

  print = () => {
    for (const key in this.list) {
      if (this.list[key] === undefined) continue;
      let result = `${key} =>`
      let temp = this.list[key].head;
      while (temp != null) {
        result += ` ${temp.data} ${temp.nextElement == null ? "": "->"}`;
        temp = temp.nextElement;
      }
      console.log(result);
    }
    console.log("________________________________________");
  }
}

export default Graph;