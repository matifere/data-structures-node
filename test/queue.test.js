import { Queue } from "../src/queue.js";
import { expect } from "chai";

describe("Queue", () => {
  it("enqueue agrega elementos", () => {
    const q = new Queue();
    q.enqueue(1);
    expect(q.size()).to.equal(1);
  });

  it("dequeue devuelve el primero", () => {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    expect(q.dequeue()).to.equal(1);
  });

  it("front devuelve sin sacar", () => {
    const q = new Queue();
    q.enqueue(42);
    expect(q.front()).to.equal(42);
    expect(q.size()).to.equal(1);
  });

  it("isEmpty funciona", () => {
    const q = new Queue();
    expect(q.isEmpty()).to.equal(true);
    q.enqueue(5);
    expect(q.isEmpty()).to.equal(false);
  });
});
