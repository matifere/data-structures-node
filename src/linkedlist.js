

export class LinkedList {
  constructor() {
    this.lgth = 0;
    this.head = null;
  }

  size() {
    return this.lgth;
  }

  append(elem) {
    if (elem != null) {
      if (this.head == null) {
        this.head = new Node(elem);
        this.lgth += 1;
        return;
      }
      let actualNode = this.head;
      while (actualNode.next != null) {
        actualNode = actualNode.next;
      }
      actualNode.next = new Node(elem);
      this.lgth += 1;
    }
  }

  prepend(elem) {
    if (elem != null) {
      if (this.head == null) {
        this.head = new Node(elem);
        this.lgth += 1;
        return;
      }
      let moveHead = this.head;
      this.head = new Node(elem);
      this.head.next = moveHead;
      this.lgth += 1;
    }
  }
  //intenta devolver el nodo que tiene el valor elem
  find(elem) {
    if (this.head == null) {
      this.head = new Node(elem);
      return;
    }

    let actual = this.head;
    while (actual.value != elem) {
      if (actual.next != null) {
        actual = actual.next;
      } else {
        break;
      }
    }
    if (actual.value == elem) {
      return actual;
    }

    return null;
  }


  remove(elem) {
    let actual = this.head;

    //si es el primero lo borramos
    if (actual.value == elem) {
      this.head = actual.next;
      return;
    }
    if(actual.next.value == null){
        return;
    }

    while (actual.next.value != elem) {
      if (actual.next == null || actual.next.value == null) {
        break;
      } else {
        actual = actual.next;
      }
    }
    if (actual.next.value == elem) {
      if (actual.next.next == null) {
        actual.next = null;
        return;
      }
      actual.next = actual.next.next;
    }

    return;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
