const LinkedList = title => {
  let head = null;
  let length = 0;

  const sampleMethod = () => console.log('testing');

  //Adds an new node to the beginnning of the linked list
  function prepend(newNode) {
    this.head = Node(newNode, this.head);
    // length++;
    console.log(`prepend node length after operation ${length}`);
    console.log(`new node function: ${newNode}`);
    console.log(`get values from this.head: ${this.head}`);
    console.log(`get values from HEAD: ${this.head.value()}`);
    console.log(`get 'next' values from HEAD: ${this.head.next()}`);
  }

  //Adds a node to the end of the linked list
  function append(newNode) {
    if (this.head == null) this.head = Node(newNode, this.head);
    let node = Node(newNode, null);
    let tail = this.head;
    while (tail.testFunctionTwo !== null) {
      tail = tail.testFunctionTwo;
      console.log(tail);
    };    
    tail.testFunctionTwo = node;
  }

  //Traverses the linked list and console log's the found values of each item 
  function traverse() {
    let n = this.head;
    while (n != null) {
      console.log(`Linked List Item: ${n.testfunction}`);
      n = n.testFunctionTwo;
    };
  }

  function getTheHead() {
    this.head != null ? console.log(this.head) : console.log('There is no head/nothing in list.');
  }

  function getTheTail() {
    let tailFinder = this.head;
    if (tailFinder == null) console.log('There is no head/nothing in list.');
    while (tailFinder != null) {
      tailFinder = tailFinder.testFunctionTwo;
      if (tailFinder.testFunctionTwo == null) console.log(`Name: ${tailFinder.testfunction}`);
    };
  }

 function size() {
    let sizeCounter = this.head;
    while (sizeCounter != null) {
      this.length += 1;
      sizeCounter = sizeCounter.testFunctionTwo;
    };
    let listSize = this.length;
    this.length = 0;
    return listSize;
  }

  //Works to find/return a value in the list based on an index key
  function searchAt(index) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode !== null) {
      if (count === index) {
        return currentNode.testfunction;
      }
      count++;
      currentNode = currentNode.testFunctionTwo;
    };
  }

 //Works to find/return an index key based on value input
  function indexAt(value) {
    let searchHead = this.head;
    // let numberOfNodes = this.size();
    // console.log(numberOfNodes);
    let searchIndex = 0;
    // let searchValue = 0;
    if (searchHead == null) return console.log('The list is empty');
    // if (value >= numberOfNodes) return console.log('This value doesn\'t exist in the list');
    while (searchHead !== null ) {

      if (searchHead.testfunction === value) {
        return searchIndex;
      };
      // searchValue = searchIndex++;
      searchIndex++;
      searchHead = searchHead.testFunctionTwo;
      console.log(searchIndex)
    };
    // if (numberOfNodes === searchIndex) console.log('no more nodes');
    return searchIndex;
  }

  function pop() {
    let getSecondLastNode = this.head;
    if (getSecondLastNode == null) {
      console.log('Nothing to be removed');
    } else if (getSecondLastNode.testFunctionTwo == null) {
      console.log('There\'s only one item in the list, cannot be removed with pop() function.');
    };
    while (getSecondLastNode.testFunctionTwo.testFunctionTwo !== null) {
      getSecondLastNode = getSecondLastNode.testFunctionTwo;
    };
    getSecondLastNode.testFunctionTwo = null;
  }

  function contains(value) {
    let searchNode = this.head;
    let listLength = this.size();
    let nodeCounter = 0;
    if (searchNode == null) console.log('There aren\'t any nodes to search.');
    while (searchNode !== null) {
      if (searchNode.testfunction === value) {
        console.log(`Found a match, located ${searchNode.testfunction}`);
      } else {
        nodeCounter++;
      };
    searchNode = searchNode.testFunctionTwo;
    };
    if (nodeCounter === listLength) console.log(`Sorry, could not match ${value} in the linked list.`);
  }

  function toString() {
    let n = this.head;
    while (n != null) {
      let x = n;
      n = n.testFunctionTwo;
      //Testing the following console log via an alert to confirm it will print out each value in the linked
      //list; however, using a general return statement in the while loop kills the loop after the zero-index item
      console.log(`${x.value()}`);
    };
    if (n === null) console.log(null);
  }

  // function to get a node from the linked list based on index position -- 
  // will aide in insertAt() and deleteAt() methods
  function getNodeAt(index) {
    let counter = 0;
    let node = this.head;
    while (node !== null) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.testFunctionTwo;
    }
    return null;
  }

  function insertAfter(newNode, index) {
    //if the list is empty...
    if (this.head === null) {
      let insertNode = Node(newNode, this.head);
      this.head = insertNode;
      return;
    }
    //if the index is higher than the list length, stop the function...
    if (index > this.size()) return console.log('The index provided higher than the amount of nodes in the list.');
   
    //if the insert node is getting prepended to the list...
    if (index === 0) {
      let insertNode = Node(newNode, this.head);
      this.head = insertNode;
      return;
    }
    //use the getAt() helper to find the previous node...
    console.log(this.size())
    const previousNode = this.getNodeAt(index - 1);
    let insertNode = Node(newNode);
    console.log(insertNode)
    insertNode.testFunctionTwo = previousNode.testFunctionTwo;
    previousNode.testFunctionTwo = insertNode;
    // return this.head;
  }

  return {
    head,
    sampleMethod,
    append,
    prepend,
    size,
    traverse,
    length,
    getTheHead,
    getTheTail,
    searchAt,
    indexAt,
    pop,
    contains,
    toString,
    insertAfter,
    getNodeAt,
  }
}

const Node = (name, nextNode) => {

  function getValue() {
    if (name != null && name != undefined) {
      return name;
    } else {
      return null;
    }
  }

  function getNextPointer() {
    if (nextNode != null && nextNode != undefined) {
      return nextNode;
    } else {
      return null;
    }
  }

  const testfunction = getValue();
  const testFunctionTwo = getNextPointer();
  const value = () => (name != null && name != undefined) ? name :  null;
  const next = () => (nextNode != null && nextNode != undefined) ? nextNode.value() : null;
  return {
    value,
    next,
    testfunction,
    testFunctionTwo,
  }
}