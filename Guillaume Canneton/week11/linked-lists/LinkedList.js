class Node{
    constructor(data){
      this.data = data
      this.next = null
    }
}

class LinkedList{
    constructor(head = null){
      this.head = head
    }
    appendNode(data){
      if (this.head === null){
        this.head = new Node(data)
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = new Node(data);
      }
    }
    prependNode(data){
      let current = this.head.data
      this.head = new Node(data)
      this.head.next = new Node(current)
    }
    pop(){
      if (this.head.next === null) {
        let nodeToPop = this.head
        this.head = null
        return nodeToPop
      }
      let current = this.head
      while (current.next.next !== null) {
        current = current.next;
      }
      let nodeToPop = current.next
      current.next = null
      return nodeToPop
        // removes the last node from the list and returns it
    }
    removeFromFront(){
      let removedNode = this.head
      this.head = this.head.next
      return removedNode
        // remove the head node from the list and return it
        // the next node in the list is the new head node
    }
    insertAt(X, data){
      let current = this.head
      let index = 0
      let newNode = new Node(data);
      if (X === 0){
        const nextNode = this.head;
        this.head = newNode;
        this.head.next = nextNode
        return this.head
      }
      while (index < X) {
        current = current.next
        index += 1
      }
      let previousNode = current.next
      newNode.next = previousNode;
      current.next = newNode;
      return this.head

        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
    }
    removeAt(X){
      let current = this.head
      let index = 0
      while (index < X-1) {
        current = current.next
        index += 1
      }
      let endList = current.next.next
      current.next = endList
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
    }
    search(data){
      let index = 0
      let current = this.head
      while (current.next !== null) {

        if (current.data === data){
          return index
        }
        current = current.next
        index += 1
      }
      return false
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
    }
    sort(){
        // sort the Linked List in ascending order of data values
    }
}

module.exports = {
    Node,
    LinkedList
}
