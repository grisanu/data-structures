var BinarySearchTree = function(value) {
	this.value = value;
	this.child = 0;
	this.left;//less
	this.right; //more
};

BinarySearchTree.prototype.insert = function (value) {
	if (this.child > 1) { // over child per node limit
		// find node to recurse
			//recurse
	} else {
		// find where to add
			// add if not already exists
			// if exists
				// recurse
	}

	if (value < this.value) {
		this.left = new BinarySearchTree(value);
	} else {
		this.right = new BinarySearchTree(value);
	}

	if (child > 2) {
		//recurse
		if (value < this.value) {
			this.left = ;
		} else {
			this.right = new BinarySearchTree(value);
		}
	} else {
		if (value < this.value) {
			this.left = new BinarySearchTree(value);
		} else {
			this.right = new BinarySearchTree(value);
		}
		this.child++;
	}
}

BinarySearchTree.prototype.contains = function (value) {
	
}

BinarySearchTree.prototype.depthFirstLog = function (callback) {
	return 2;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
