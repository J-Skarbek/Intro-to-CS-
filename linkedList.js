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
    while (tail.testFunctionTwo != null) {
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
    console.log(`The length of the linked list is ${this.length}`);
  }

  function indexAt(index) {
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

  function searchAt(key) {
    let tempHead = this.head;
    console.log(tempHead);
    if (tempHead == null) return false;
    if (tempHead.testfunction == key) return true;
    return searchAt(tempHead.testfunction, key);
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