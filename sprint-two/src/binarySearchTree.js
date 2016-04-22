var BinarySearchTree = function(value) {
	this.value = value;
	this.child = 0;
	this.left;//less
	this.right; //more
};

BinarySearchTree.prototype.insert = function (value) {
	var sideToAdd;

	if (value < this.value) {
		sideToAdd = this.left;
	} else {
		sideToAdd = this.right;
	}

	if (this.child > 1) { // over or equal child per node limit
		// recurse
		sideToAdd.insert(value);
	} else {
		// add if not already exists
		if (sideToAdd === undefined) {
			sideToAdd = new BinarySearchTree(value);
		} else { // if exists
			sideToAdd.insert(value);
		}
	}
}

BinarySearchTree.prototype.contains = function (value) {
	
}

BinarySearchTree.prototype.depthFirstLog = function (callback) {

}
/*
 * Complexity: What is the time complexity of the above functions?
 */
