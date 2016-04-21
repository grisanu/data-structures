var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.max = 0;
  someInstance.min = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
	this.storage[this.max] = value;
	this.max++;
}

queueMethods.dequeue = function () {
	var dequeued = this.storage[this.min];
	delete this.storage[this.min];
	this.min++;
	return dequeued;
}

queueMethods.size = function () {
	return (this.max-this.min) < 0 ? 0 : (this.max-this.min);
}


