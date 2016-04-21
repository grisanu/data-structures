// functional style?
var LinkedList = function() {
  var list = {};

  // contains Node class objects with numeric keys
  list.storage = {};

  // refer to appropiate node
  list.head = null;
  list.tail = null;

  // next numeric key to add new Node to
  list.counter = 0;

  list.addToTail = function(value) {
    var newNode = Node();
    newNode.value = value;

    // add new node to storage
    this.storage[this.counter] = newNode;

    if (this.head === null) { // first element in linked list
      this.head = this.storage[this.counter];
      this.tail = this.head;
    } else { // NOT first element in linked list
      // point to tail node to new tail node key
      this.storage[this.tail].next = this.storage[this.counter];
      // changing tail ref to new tail ref
      this.tail = this.storage[this.counter];
    }

    this.counter++;
  };

  list.removeHead = function() {
    // if (list.tail === null) { // only 1 element in linked list
    //   list.head = null;
    // } else {
    //   list.head = list.head.next;
    // }
  };

  list.contains = function(target) { 
    // while ()
  };

  return list;
};

var Node = function(value) { // each node class only points to its tail
  var node = {};

  node.value = value;
  node.next = null; // only created / assigned when call addToTail

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// list empty object => with .head, .tail,
// .addToTail(), .removeHead(), .contain()
var aa = LinkedList();
aa.addToTail(5)
