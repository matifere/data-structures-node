import { Stack } from "../src/stack.js";
import { expect } from "chai";


describe("Stack", () => {
    it("push agrega elementos", () => {
        const s = new Stack();
        s.push(1);
        expect(s.size()).to.equal(1);
    });

    it("pop devuelve el último elemento", () => {
        const s = new Stack();
        s.push(1);
        s.push(2);
        expect(s.pop()).to.equal(2);
    });

    it("peek muestra el último sin sacarlo", () => {
        const s = new Stack();
        s.push(10);
        expect(s.peek()).to.equal(10);
        expect(s.size()).to.equal(1);
    });

    it("isEmpty funciona", () => {
        const s = new Stack();
        expect(s.isEmpty()).to.equal(true);
        s.push(5);
        expect(s.isEmpty()).to.equal(false);
    });
});
