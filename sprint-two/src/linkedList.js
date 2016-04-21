// functional style?
var LinkedList = function() {
  var list = {};

  // where data is stored as nested objects
  // refer to appropiate node
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node();
    newNode.value = value;

    if (this.head === null) { // first element in linked list
      this.head = newNode;
      this.tail = this.head;
    } else { // NOT first element in linked list
      // point to tail node to new tail node key
      this.tail.next = newNode;
      // changing tail ref to new tail ref
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    // move head reference
      // if next head node does not exists
      var removed = this.head.value;
      if (this.head.next === null) {
        this.head = null;
        this.tail = null; // means there s only 1 node in linked list
      } else { // if next head node exists
        this.head = this.head.next;
      }

      return removed;
  };

  list.contains = function(target) { 
    // while 
    var currentNode = this.head;
    while (currentNode.value !== target) { // not found
      currentNode = currentNode.next;
      if (currentNode === null) { // end of chain
        return false;
      }
    }
    return true
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
 _.addToTail = O(2)
 _.removeHead = O(2)
 _.contains = O(n)
 */

