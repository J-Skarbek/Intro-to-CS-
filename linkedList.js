const LinkedList = title => {
  let head = null;
  let length = 0;

  const sampleMethod = () => console.log('testing');

  //Adds an new node to the beginnning of the linked list
  function prepend(newNode) {
    this.head = Node(newNode, this.head);
    length++;
    console.log(`prepend node length after operation ${length}`);
    console.log(`new node function: ${newNode}`);
    console.log(`get values from this.head: ${this.head}`);
    console.log(`get values from HEAD: ${this.head.value()}`);
    console.log(`get 'next' values from HEAD: ${this.head.next()}`);
  }

  //Adds a node to the end of the linked list
  function append(newNode) {
    if (this.head == null) {
      return prepend(newNode);
    }
    let node = Node(newNode, null);
    let tail = this.head;
    while (tail.testFunctionTwo != null) {
      tail = tail.testFunctionTwo;
      console.log(tail);
    };    
    tail.testFunctionTwo = node;
  }

  //Traverses the linked list and console log's the found values of each item 
  function find() {
    let n = this.head;
    while (n != null) {
      console.log(`Linked List Item: ${n.testfunction}`);
      n = n.testFunctionTwo;
    };
  }

  function getTheHead(){
    return this.head;
  }

  const size = () => (length > 0) ? length : console.log(`The length of the linked list is ${length}`);

  return {
    head,
    sampleMethod,
    append,
    prepend,
    size,
    find,
    length,
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