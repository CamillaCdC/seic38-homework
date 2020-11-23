class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {

  constructor(data=null){
    if (data !== null){
      this.head = new Node(data);
    }else{
      this.head = null;
    }
  }

  appendNode(data){
    const node = new Node(data);

    if (this.head === null){
      this.head = node;
    }else{

      let current_node = this.head;
      while (current_node.next !== null){
        current_node = current_node.next;
      }
      current_node.next = node;
    }
  }

  prependNode(data){
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  pop(){
    let _node = this.head;
    let length=0;

    while (_node !== null){
      length += 1 ;
      _node = _node.next;
    }

    return this.removeAt(length-1);
  }

  removeFromFront(){
    const previous_head = this.head;
    this.head = this.head.next;
    return previous_head;
  }

  insertAt(X, data){
    const new_node = new Node(data);
    let check_node = this.head;

    if (X === 0){
      const next_node = this.head;
      this.head = new_node;
      new_node.next = next_node;

    }else{
      let index = 1;
      while (index !== X){
        check_node = check_node.next;
        index +=1;
      }

      const previous_next = check_node.next;
      check_node.next = new_node;
      new_node.next = previous_next;
    }
  }

  removeAt(X){

    let current_node = this.head;
    let index = 0;

    if (X === index){
      const new_head = this.head.next;
      this.head = new_head;

    }else{
      let next_node;
      let previous_node;

      while ((current_node !== null) && (index !== X)){
        previous_node = current_node;
        current_node = current_node.next;

        if (current_node === null){
          next_node = null;
        }else{
          next_node = current_node.next;
        }

        index +=1;
      }

      if (next_node === null){
        previous_node.next = null;
      }else{
        previous_node.next = next_node;
      }

    }

    return current_node;
  }

  search(data){
    let current_node = this.head
    let index = 0;

    while ((current_node !== null ) && (current_node.data !== data)){
      current_node = current_node.next;
      index += 1;
    }

    if (current_node === null){
      return false;
    }else{
      return index;
    }
  }

  sort(){
    let current_node = this.head;
    let node_array = [];
    let node_array_data = [];

    while (current_node !== null) {
      node_array.push(current_node);
      node_array_data.push(current_node.data);
      current_node = current_node.next;
    }

    node_array_data = node_array_data.sort((a,b) => a-b);

    let index_node = 0;
    this.head = null;

    while (index_node !== node_array_data.length) {
      for (let i=0; i<node_array.length; i++){
        if (node_array[i].data === node_array_data[index_node]){
          this.appendNode(node_array[i].data);
        }
      }
      index_node += 1;
    }
  }
}

module.exports = {
    Node,
    LinkedList
}
