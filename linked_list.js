//defining a linked list

function LinkedList() {
  this.head = null;
}

//creating a method to add elements to linked list
LinkedList.prototype.push = function(val) {
  var node = {
    value: val,
    next: null
  };
  if (!this.head) {
    this.head = node;
  } else {
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
};

//adding elements to linked list
const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

//creating another new linked list
const newlist = new LinkedList();
newlist.push(1);
newlist.push(2);
newlist.push(3);
newlist.push(4);
newlist.push(5);

console.log(list.head);

//creating a method to remove a linked list
LinkedList.prototype.remove = function(val) {
  var current = this.head;
  //case-1
  if (current.value == val) {
    this.head = current.next;
  } else {
    var previous = current;

    while (current.next) {
      //case-3
      if (current.value == val) {
        previous.next = current.next;
        break;
      }
      previous = current;
      current = current.next;
    }
    //case -2
    if (current.value == val) {
      previous.next == null;
    }
  }
};

//this is the main code to find the middle of a linked list

var middleNode = function(head) {
  const result = {};
  let count = 0;

  while (head) {
    result[count++] = head;
    head = head.next;
  }
  //if you want a particular value comment below line and use return result[Math.floor(Object.keys(result).length / 2)].value;
  return result[Math.floor(Object.keys(result).length / 2)];
};

//pass head value to get the middle
console.log(middleNode(list.head));
console.log(middleNode(newlist.head));
