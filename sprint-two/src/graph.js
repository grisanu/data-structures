

// ------------------------
// Instantiate a new graph
var Graph = function() {
	this.nodes = {};

};


// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.nodes[node] = {'value': node, 'edges': []};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented 
// in the graph.
Graph.prototype.contains = function(node) {
	if (this.nodes[node] !== undefined) {
		return true;
	}
	return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	var arrayOfEdgesInFromNode = this.nodes[fromNode].edges; 
	for (var edge = 0; edge < arrayOfEdgesInFromNode.length; edge++) {
		if (arrayOfEdgesInFromNode[edge] === toNode.toString()) { // found edge
			return true
		}
	}
	return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.nodes[fromNode].edges.push(toNode.toString());
	this.nodes[toNode].edges.push(fromNode.toString());
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	var foundFromNode = false;
	var foundToNode = false;

	// remove edge from fromNode
	for (var edgeNumber = 0; 
		edgeNumber < this.nodes[fromNode].edges.length; 
		edgeNumber++) {
		if (this.nodes[fromNode].edges[edgeNumber] === toNode.toString()) {
			this.nodes[fromNode].edges.splice(edgeNumber, 1);
			foundFromNode = true;
		}
	}

	// remove edge from ToNode
	for (var edgeNumber = 0; 
		edgeNumber < this.nodes[toNode].edges.length; 
		edgeNumber++) {
		if (this.nodes[toNode].edges[edgeNumber] === fromNode.toString()) {
			this.nodes[toNode].edges.splice(edgeNumber, 1);
			foundToNode = true;
		}
	}

	if (foundToNode || foundFromNode) {
		console.log("Node not found!")
		// debugger;
	}
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for (var node in this.nodes) {
		cb(node);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode - O(1)
 contains - O(1)
 removeNode - O(1)
 hasEdge - O(n)
 addEdge - O(1)
 removeEdge - O(2n) ~ O(n)
 forEachNode - O(n)
 */

