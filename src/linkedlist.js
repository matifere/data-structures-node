export class LinkedList {
  constructor(comparator) {
    // comparator: optional function (a, b) => boolean
    this.lgth = 0;
    this.head = null;
    this._cmp = typeof comparator === "function" ? comparator : LinkedList.defaultComparator;
  }

  static defaultComparator(a, b) {
    // rápido check de identidad (primitivos o misma referencia)
    if (a === b) return true;

    // si 'a' tiene equals
    if (a != null && typeof a.equals === "function") {
      try { return a.equals(b); } catch (e) { /* si equals lanza, ignoramos */ }
    }

    // si 'b' tiene equals
    if (b != null && typeof b.equals === "function") {
      try { return b.equals(a); } catch (e) { /* ignorar */ }
    }

    // fallback: no iguales
    return false;
  }

  size() {
    return this.lgth;
  }

  isEmpty() {
    return this.lgth === 0;
  }

  append(elem) {
    if (elem === null || elem === undefined) return;

    const newNode = new Node(elem);
    if (this.head === null) {
      this.head = newNode;
      this.lgth++;
      return;
    }

    let actual = this.head;
    while (actual.next !== null) actual = actual.next;
    actual.next = newNode;
    this.lgth++;
  }

  prepend(elem) {
    if (elem === null || elem === undefined) return;

    const newNode = new Node(elem);
    newNode.next = this.head;
    this.head = newNode;
    this.lgth++;
  }

  // Devuelve el nodo si lo encuentra, sino null
  find(elem) {
    if (this.head === null) return null;
    let actual = this.head;
    while (actual !== null) {
      if (this._cmp(actual.value, elem)) return actual;
      actual = actual.next;
    }
    return null;
  }

  // Elimina la primera ocurrencia que cumpla comparator; devuelve true si borró
  remove(elem) {
    if (this.head === null) return false;

    // caso cabeza
    if (this._cmp(this.head.value, elem)) {
      this.head = this.head.next;
      this.lgth--;
      return true;
    }

    let prev = this.head;
    let curr = this.head.next;

    while (curr !== null) {
      if (this._cmp(curr.value, elem)) {
        prev.next = curr.next;
        this.lgth--;
        return true;
      }
      prev = curr;
      curr = curr.next;
    }

    return false;
  }

  // utilidades
  toArray() {
    const out = [];
    let actual = this.head;
    while (actual !== null) {
      out.push(actual.value);
      actual = actual.next;
    }
    return out;
  }

  clear() {
    this.head = null;
    this.lgth = 0;
  }

  // iterador para for..of
  *[Symbol.iterator]() {
    let actual = this.head;
    while (actual !== null) {
      yield actual.value;
      actual = actual.next;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
