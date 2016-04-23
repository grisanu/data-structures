var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  // contains an array of sub-trees
  newTree.parent = [];
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

// add a value as child => sets as target of a node
treeMethods.addChild = function(value) {
	var newTree = Tree(value);
	newTree.parent.push(this);
	this.children.push(newTree);
};

// take any value => check a target node and all descendents if contains value
treeMethods.contains = function(target) {
	// debugger;
	var hasTarget = false;

	// trarget in current node
	if (this.value === target) {
		return hasTarget || true;
	}
	// target not in current node
	if (this.children.length > 0) { // target has children
		// debugger;
		for (var child = 0; child < this.children.length; child++) {
			// debugger;
			hasTarget = hasTarget || this.children[child].contains(target);
		}
		return hasTarget;
		
	} else {
		return hasTarget || false;
	}
};

treeMethods.removeFromParent = function (treeNode) {
	// assume unique children value for each node
	for (var child = 0; child < treeNode.parent[0].children.length; child++) {
		if (treeNode.parent[0].children[child].value === treeNode.value) {
			treeNode.parent[0].children.splice(child, 1);
		}
	}
	treeNode.parent = [];
	// return removed child tree
	return treeNode;
}

// tree.addChild(5);
// tree.addChild(6);
// tree.children[0].addChild(7);
// tree.children[0].children[0].addChild(9);
// tree.children[0].addChild(10);
// tree.children[1].addChild(8);
// tree.removeFromParent(tree.children[0].children[0]);

/*
 * Complexity: What is the time complexity of the above functions?
 _.addChild = O(k)
 _.contains = O(n)
 */
