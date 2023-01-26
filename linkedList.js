const fourtyFive = [
 'lil wayne',
 'drake',
 'nikki minage',
 'childish gambino',
 'two chainz',
 'mac dre',
 'emeniem',
 'jay-z',
 'rick ross',
 'future',
 'travis scott',
 'timbaland',
 'migos',
 'rich boy',
 'soulja boy'
];

const LinkedList = title => {

  let head = null;
  let length = 0;

  const sampleMethod = () => console.log('testing');

  // const append = value => {
  //   const newNode = Node(value);
  //   length++;
  //   console.log(newNode.value());
  //   console.log(length)
  //   return newNode;
  // };

  // const append = newNode => {
  //   if (head === null) prepend(newNode);
  //   newNode = Node(newNode);

  // };

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
  const append = newNode => {
    if (head === null) prepend(newNode);
    let tmp = Node('tmp', null);
    tmp = head;
    while (tmp.next() !== null) tmp = tmp.next();
    tmp.next() = Node(newNode, null);

  }

  function find() {
    let n = this.head;
    console.log(typeof n, n.value(), n.next());
    while (n != null) {
      console.log(`before: ${n.value()}`);
      n = n.next();
    }
    console.log(`after: ${n.value()}`, typeof n);

    // const testValidity = () => {
    //   if (n = null) {
    //     console.log(n.value());
    //     return n;
    //   } else {
    //     console.log(n.value());
    //     n = n.next();
    //     testValidity();
    //   }
    // }
  }

  // const tail = () => {
  //   while (head !== null) {
  //     if 
  //   }
  // }

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
    // tail,
  };
};

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
      return nextNode.value();
    } else {
      return null;
    }
  }

  const testfunction = getValue();
  const testFunction2 = getNextPointer();
  const value = () => (name != null && name != undefined) ? name :  null;
  const next = () => (nextNode != null && nextNode != undefined) ? nextNode.value() : null;
  return {
    value,
    next,
    testfunction,
    testFunction2,
  }
}