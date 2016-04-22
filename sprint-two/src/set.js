var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	this[item] = item;
};

setPrototype.contains = function(item) {
	if (this[item] === undefined) {
		return false;
	}
	return true;
};

setPrototype.remove = function(item) {
	if (this[item] !== undefined) {
		delete this[item];
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 add - O(1)
 contains - O(1)
 remove - O(1)
 */
