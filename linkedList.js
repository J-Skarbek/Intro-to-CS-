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
    head = Node(newNode, head);
    length++;
    console.log(`prepend node length after operation ${length}`);
    console.log(`new node function: ${newNode}`);
    console.log(`get values from HEAD: ${head.value()}`);
    console.log(`get 'next' values from HEAD: ${head.next()}`);
    // return head;
  };

  //Adds a node to the end of the linked list
  const append = newNode => {
    if (head === null) prepend(newNode);
    let tmp = Node('tmp', null);
    tmp = head;
    while (tmp.next() !== null) tmp = tmp.next();
    tmp.next() = Node(newNode, null);

  };

  //Traverses the linked list, stopping at the tail/node.next === null
  function find() {
    let tmp = Node('tmp');
    tmp = head;
    while (tmp !== null) tmp = tmp.next();
  }

  // const tail = () => {
  //   while (head !== null) {
  //     if 
  //   }
  // }



  const size = () => (length > 0) ? length : console.log(`The length of the linked list is ${length}`);

  return {
    head,
    sampleMethod,
    append,
    prepend,
    size,
    find,
    // tail,
  };
};

const Node = (name, nextNode) => {
  const value = () => (name != null && name != undefined) ? name :  null;
  const next = () => (nextNode != null && nextNode != undefined) ? nextNode.value() : null;
  return {
    value,
    next,
  }
}