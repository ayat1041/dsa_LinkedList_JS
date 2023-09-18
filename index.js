const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(3000, () => console.log("Example app listening on port 3000!"));

// console.log("ayat")

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  // constant time complexity O(1)
  prepend(value) {
    // create the node
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      // add at the first
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  // O(n)
  append(value) {
    //create the node
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    // invalid index
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    // remove the first index
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
        removedNode = prev.next;
      }
      prev.next = prev.next.next;
    }
    this.size--;
    return removedNode.value;
  }
  removeValue(value) {
    // check if empty
    if(this.isEmpty()){
        console.log("The List is Empty")
    }if(this.head.value === value){
        this.head = this.head.next
        this.size--
        return value
    }else{
        let prev = this.head;
        while(prev.next && prev.next.value != value){
             prev = prev.next;
        }
        if(prev.next) {
            const removedNode = prev.next
            prev.next = removedNode.next
            this.size--
            return value
        }
        return null
    }
    
  }

  print() {
    if (this.isEmpty()) {
      console.log("the list is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
// console.log(list.isEmpty())
// console.log(list.getSize())
list.prepend(10);
list.append(20);
list.append(30);
list.append(40);
list.print();
console.log(`Removed value is :  ${list.removeFrom(2)}`);
list.print();
console.log(`List size :  ${list.getSize()}`);
console.log(list.removeValue(40))
list.print();
console.log(list.removeValue(10))
list.print();
console.log(list.removeValue(80))
list.print();
