var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) { // empty index
  	this._storage.set(index, [[key, value]]);
  } else {
  	for (var tuple = 0; tuple < bucket.length; tuple++) {
  		if (bucket[tuple][0] === key) {
  			bucket[tuple][1] = value;
  			return;
  		}
  	}
  	bucket.push([key, value]);
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  for (var tuple = 0; tuple < bucket.length; tuple++) {
  	if (bucket[tuple][0] === key) {
  		return bucket[tuple][1];
  	}
  }
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  for (var tuple = 0; tuple < bucket.length; tuple++) {
  	if (bucket[tuple][0] === key) {
  		bucket.splice(tuple, 1);
  		return;
  	}
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert - O(1)
 retrieve - O(1)
 remove - O(1)
 */


