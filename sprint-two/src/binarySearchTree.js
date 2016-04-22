var BinarySearchTree = function(value) {
	this.value = value;
	this.child = 0;
	this.left;//less
	this.right; //more
};

BinarySearchTree.prototype.insert = function (value) {
	var sideToAdd;

	if (value < this.value) {
		sideToAdd = 'left';
	} else {
		sideToAdd = 'right';
	}

	if (this.child > 1) { // over or equal child per node limit
		// recurse
		this[sideToAdd].insert(value);
	} else {
		// add if not already exists
		if (this[sideToAdd] === undefined) {
			this[sideToAdd] = new BinarySearchTree(value);
			this.child++;
		} else { // if exists
			this[sideToAdd].insert(value);
		}
	}
}

BinarySearchTree.prototype.contains = function (value) {
	var sideToLook;

	if (value < this.value) {
		sideToLook = 'left';
	} else {
		sideToLook = 'right';
	}

	if (this.value === value) {
		return true
	} else if (this[sideToLook] === undefined) {
		return false;
	} else {
		return this[sideToLook].contains(value);
	}

}

BinarySearchTree.prototype.depthFirstLog = function (callback) {
	callback(this.value);

	
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
