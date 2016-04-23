var DoublyLinkedList = function () {
	this.head = null;
	this.tail = null;
}

DoublyLinkedList.prototype.addToTail = function (value) {
	var newNode = Node(value);

	if (this.head === null) {
		this.head = newNode;
		this.tail = this.head;
	} else {
		newNode.previous = this.tail;
		this.tail.next = newNode;
		this.tail = this.tail.next;
	}
}

DoublyLinkedList.prototype.removeHead = function () {
	var removed = this.head.value;
	if (this.head.next === null) {
		this.head = null;
		this.tail = null;
	} else {
		this.head = this.head.next;
		this.head.previous = null;
	}
	return removed;
}

DoublyLinkedList.prototype.contains = function (target) { // return boolean
    var currentNode = this.head;
    while (currentNode.value !== target) { // not found
      currentNode = currentNode.next;
      if (currentNode === null) { // end of chain
        return false;
      }
    }
    return true
}

DoublyLinkedList.prototype.addToHead = function (value) {
	var newNode = Node(value);

	if (this.head === null) {
		this.addToTail(value);
	} else {
		newNode.next = this.head;
		this.head.previous = newNode;
		this.head = newNode;
	}
}

DoublyLinkedList.prototype.removeTail = function () { // return value removed
	if (this.head === null) {
		return null;
	} else if (this.head.next === null) {
		return this.removeHead();
	} else {
		var removed = this.tail.value;
		this.tail.previous.next = null;
		this.tail = this.tail.previous;
		return removed;
	}
}