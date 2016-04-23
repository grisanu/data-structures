describe('doublyLinkedList', function() {
  var doublylinkedList;

  beforeEach(function() {
    doublylinkedList = new DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublylinkedList).to.have.property('head');
    expect(doublylinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublylinkedList.addToTail).to.be.a('function');
    expect(doublylinkedList.removeHead).to.be.a('function');
    expect(doublylinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublylinkedList.addToTail(4);
    expect(doublylinkedList.tail.value).to.equal(4);
    doublylinkedList.addToTail(5);
    expect(doublylinkedList.tail.value).to.equal(5);
  });

  it('should be able to refer to previous node if not a head node', function() {
  doublylinkedList.addToTail(4);
  doublylinkedList.addToTail(5);
  expect(doublylinkedList.tail.previous.value).to.equal(4);
  });  

  it('should remove the head from the list when removeHead is called', function() {
    doublylinkedList.addToTail(4);
    doublylinkedList.addToTail(5);
    expect(doublylinkedList.head.value).to.equal(4);
    doublylinkedList.removeHead();
    expect(doublylinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublylinkedList.addToTail(4);
    expect(doublylinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublylinkedList.addToTail(4);
    doublylinkedList.addToTail(5);
    expect(doublylinkedList.contains(4)).to.equal(true);
    expect(doublylinkedList.contains(5)).to.equal(true);
    expect(doublylinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublylinkedList.addToTail(4);
    doublylinkedList.addToTail(5);
    doublylinkedList.removeHead();
    expect(doublylinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doublylinkedList
  it('should contain a value that was removed, if that value is also found in linked list', function() {
    doublylinkedList.addToTail(4);
    doublylinkedList.addToTail(4);
    doublylinkedList.removeHead();
    expect(doublylinkedList.contains(4)).to.equal(true);
  });

  // test addtohead
    // should correctly add head when list empty
  it('should be able to add value to empty list', function() {
    doublylinkedList.addToHead(4);
    expect(doublylinkedList.contains(4)).to.equal(true);
  });
    // should correctly add when list isnt empty
  it('should be able to correctly add node to head with correct links', function() {
    doublylinkedList.addToTail(4);
    doublylinkedList.addToTail(5);
    doublylinkedList.addToTail(6);
    doublylinkedList.addToTail(7);
    doublylinkedList.addToHead(3);
    expect(doublylinkedList.contains(3)).to.equal(true);
    expect(doublylinkedList.head.value).to.equal(3);
    expect(doublylinkedList.head.next.value).to.equal(4);
    expect(doublylinkedList.head.next.previous.value).to.equal(3);
    expect(doublylinkedList.head.next.next.next.value).to.equal(6);
  });

  // test addToTail
    // should return empty list when try to invoke removeTail from empty list
    it('should be still be an empty list when try to removeTail of empty list', function() {
      expect(doublylinkedList.removeTail()).to.equal(null);
    });
    // should correctly remove tail from list of 1 element
    it('should be still be an empty list when try to removeTail of empty list', function() {
      doublylinkedList.addToTail(4);
      expect(doublylinkedList.removeTail()).to.equal(4);
      expect(doublylinkedList.head).to.equal(null);
      expect(doublylinkedList.tail).to.equal(null);
    });
    // should correctly remove tail ffrom lsit of > 1 element
    it('should correct removeTail from a list of length greater than 1', function() {
      doublylinkedList.addToTail(4);
      doublylinkedList.addToTail(5);
      doublylinkedList.addToTail(6);
      doublylinkedList.addToTail(7);
      expect(doublylinkedList.removeTail()).to.equal(7);
      expect(doublylinkedList.tail.value).to.equal(6);
      expect(doublylinkedList.tail.next).to.equal(null);
      expect(doublylinkedList.tail.previous.value).to.equal(5);
    });
});
