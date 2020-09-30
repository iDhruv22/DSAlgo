import LinkedList from "./LinkedList.mjs";
import log from "./log.mjs";
import Stack from "./Stack.mjs";
import Queue from "./Queue.mjs";
import Graph from "./GraphAL.mjs";
import BinarySearchTree from "./BinarySearchTree.mjs";
import AVL from "./AVL.mjs";
import Trie from "./Trie.mjs";
import MaxHeap from "./MaxHeap.mjs";
import HashTable from "./HashTable.mjs";
import mergeSort from "./MergeSort.mjs";
import quickSort from "./QuickSort.mjs";


let arr = Array(1000).fill(0).map(() => Math.floor(Math.random() * 1000));
console.time()
console.log(quickSort([...arr]));
console.timeEnd()


console.time()
console.log([...arr].sort())
console.timeEnd()
// console.log(mergeSort([5, 3, 2,4,6,7,8,90,5,4]));

// const hashTable = new HashTable(10);

// hashTable.insert(3, "test1");
// hashTable.insert(7, "test2");
// hashTable.insert(14, "test3");
// hashTable.insert(13, "test4");
// hashTable.insert(3, "test5");
// hashTable.insert(8, "test6");
// hashTable.insert(1, "test6");
// hashTable.insert(2, "test6");

// for (const key in Array(100).fill(0)) {
//     let random = Math.floor(Math.random() * 100) % key;
//     hashTable.insert(random, Buffer.from(random.toString()).toString('base64'))
// }
// console.log("hashTable", hashTable.bucket);

// console.log("hashTable", hashTable.bucket)
// console.log("hashTable", hashTable.size);
// console.log("hashTable.search(2)", hashTable.search(244))

// const maxHeap = new MaxHeap();
// maxHeap.insert(8);
// maxHeap.insert(9);
// maxHeap.insert(3);
// maxHeap.insert(11);
// maxHeap.insert(12);
// maxHeap.insert(13);
// maxHeap.insert(12);

// console.log(maxHeap.removeMax());
// console.log(maxHeap.removeMax());
// console.log(maxHeap.removeMax());
// console.log(maxHeap.removeMax());
// console.log(maxHeap.removeMax());
// console.log(maxHeap.removeMax());
// console.log(maxHeap.removeMax());

// const trie = new Trie();

// trie.insert("dhruv");
// trie.insert("dhr");
// trie.insert("dhruvpatel");
// trie.print();
// console.log("________________________")
// trie.delete("dhruvpatel");
// trie.print();

// const avl = new AVL();
// avl.insert(5);
// avl.insert(8);
// avl.insert(6);
// avl.insert(9);
// log(avl.root);
// avl.delete(5);
// log(avl.root);

// const bst = new BinarySearchTree(100);
// bst.insertI(20)
// bst.insertI(500);
// bst.insertI(10);
// bst.insertI(30);
// bst.insertI(9);

// // 134678131410

// // log(bst.getTree());

// console.log(bst.delete(20));

// const g1 = new Graph();
// g1.addEdge(2, 3);
// g1.addEdge(0, 1);
// g1.addEdge(0, 2);
// g1.addEdge(2, 1);
// g1.print();
// g1.removeEdge(0, 1);
// g1.print();
// g1.removeVertex(1);
// g1.print();
// log(g1);

// const q1 = new Queue();
// q1.enqueue(10);
// q1.enqueue(11);
// q1.enqueue(12);

// log(q1);

// q1.dequeue();
// q1.dequeue();

// log(q1);

// console.log("q1.getFront()", q1.getFront())

// const s1 = new Stack();
// s1.push(10);
// s1.push(11);
// s1.push(12);
// log(s1);
// console.log("s1.pop();", s1.pop())
// log(s1);


// const l1 = new LinkedList();
// l1.insertAtTail(12);
// l1.insertAtTail(13);

// log(l1);

// l1.insertAtHead(11);
// l1.insertAtHead(10);

// log(l1);

// l1.delete(({
//   data
// }) => data == 11);

// log(l1);

// l1.search(({
//   data
// }) => data == 11);