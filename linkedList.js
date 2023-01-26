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

  let HEAD = null;
  let length = 0;

  const sampleMethod = () => console.log('testing');

  const append = value => {};

  const prepend = value => {};

  const size = () => (length > 0) ? length : console.log(`The length of the linked list is ${length}`);

  return {
    HEAD,
    sampleMethod,
    size,
  };
};

const Node = (name, nextNode) => {
  const value = () => (name != null && name != undefined) ? name :  null;
  const pointer = () => (nextNode != null && nextNode != undefined) ? nextNode : null;
  return {
    value,
    pointer,
  }
}