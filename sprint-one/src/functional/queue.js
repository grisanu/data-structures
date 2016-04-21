var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var max = 0;
  var min = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[max] = value;
    max++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[min];
    delete storage[min];
    min++;

    return dequeued;
  };

  someInstance.size = function() {
    return (max-min) < 0 ? 0: (max-min);
  };

  return someInstance;
};
