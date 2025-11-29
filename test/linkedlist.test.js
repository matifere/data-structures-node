import { LinkedList } from "../src/linkedlist.js";
import { expect } from "chai";

describe("LinkedList", () => {
    it("append agrega al final", () => {
        const list = new LinkedList();
        list.append(1);
        list.append(2);
        expect(list.find(2).value).to.equal(2);
    });

    it("prepend agrega al inicio", () => {
        const list = new LinkedList();
        list.prepend(5);
        list.append(9);
        expect(list.find(5).value).to.equal(5);
    });

    it("remove elimina un nodo", () => {
        const list = new LinkedList();
        list.append(3);
        list.append(7);
        list.remove(3);
        expect(list.find(3)).to.equal(null);
    });

    it("size funciona", () => {
        const list = new LinkedList();
        list.append(1);
        list.append(2);
        expect(list.size()).to.equal(2);
    });
});
