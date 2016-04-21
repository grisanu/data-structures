var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  // contains an array of sub-trees
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

// add a value as child => sets as target of a node
treeMethods.addChild = function(value) {
	this.children.push(Tree(value));
};

// take any value => check a target node and all descendents if contains value
treeMethods.contains = function(target) {
	debugger;
	var hasTarget = false;

	// trarget in current node
	if (this.value === target) {
		return hasTarget || true;
	}
	// target not in current node
	if (this.children.length > 0) { // target has 0 children
		// debugger;
		return hasTarget || false;
	} else {
		for (var child = 0; child < this.children.length; child++) {
			// debugger;
			return hasTarget || this.children[child].contains(target);
		}
	}
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
