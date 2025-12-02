/* la siguiente implementacion no permite elementos duplicados
 */

export class BST {
  constructor() {
    this.size = 0;
    this.head;
  }

  size() {
    return this.size;
  }

  insert(value) {
    if (this.head == null) {
      this.head = new Node(value);
      this.size += 1;
      return;
    }
    let nodoActual = this.head;

    while (nodoActual.value > value) {
      if (nodoActual.leftNode == null) {
        nodoActual.leftNode = new Node(value);
        this.size += 1;
        return;
      }
      nodoActual = nodoActual.leftNode;
      if (nodoActual.value < value) {
        if (nodoActual.rightNode == null) {
          nodoActual.rightNode = new Node(value);
          this.size += 1;

          return;
        }
        nodoActual = nodoActual.rightNode;
      }
    }
    while (nodoActual.value < value) {
      if (nodoActual.rightNode == null) {
        nodoActual.rightNode = new Node(value);
        this.size += 1;

        return;
      }
      nodoActual = nodoActual.rightNode;
      if (nodoActual.value > value) {
        if (nodoActual.leftNode == null) {
          nodoActual.leftNode = new Node(value);
          this.size += 1;

          return;
        }
        nodoActual = nodoActual.leftNode;
      }
    }
  }

  contains(value) {
    let nodoActual = this.head;
    if (nodoActual.value == value) {
      return true;
    }

    while (nodoActual.value > value) {
      if (nodoActual.leftNode == null) {
        return false;
      }
      nodoActual = nodoActual.leftNode;
      if (nodoActual.value == value) {
        return true;
      }
      if (nodoActual.value < value) {
        if (nodoActual.rightNode == null) {
          return false;
        }
        nodoActual = nodoActual.rightNode;
        if (nodoActual.value == value) {
          return true;
        }
      }
    }
    while (nodoActual.value < value) {
      if (nodoActual.rightNode == null) {
        return false;
      }
      nodoActual = nodoActual.rightNode;
      if (nodoActual.value == value) {
        return true;
      }
      if (nodoActual.value > value) {
        if (nodoActual.leftNode == null) {
          return false;
        }
        nodoActual = nodoActual.leftNode;
        if (nodoActual.value == value) {
          return true;
        }
      }
    }
    return false;
  }

  min() {
    let nodoActual = this.head;
    while (nodoActual.leftNode != null) {
      nodoActual = nodoActual.leftNode;
    }
    return nodoActual.value;
  }
  max() {
    let nodoActual = this.head;
    while (nodoActual.rightNode != null) {
      nodoActual = nodoActual.rightNode;
    }
    return nodoActual.value;
  }

  remove(){
    
  }

  inOrder(){
    let res = [];
    
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.leftNode;
    this.rightNode;
  }
}
