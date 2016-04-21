var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.len = 0;
};

Stack.prototype.push = function (value) {
	this.storage[this.len] = value;
	this.len++;
}

Stack.prototype.pop = function () {
	var popped = this.storage[this.len -1];
	delete this.storage[this.len -1];
	this.len--;
	return popped;
}

Stack.prototype.size = function () {
	return this.len < 0 ? 0 : this.len;
}
