export class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(elem) {
    this.queue.push(elem);
  }
  size() {
    return this.queue.length;
  }
  dequeue() {
    return this.queue.shift();
  }
  front() {
    try {
      return this.queue[0];
    } catch {
      return;
    }
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}
