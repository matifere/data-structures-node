import { BST } from "../src/bst.js";
import { expect } from "chai";

describe("BST", () => {
    it("insert funciona", () => {
        const tree = new BST();
        tree.insert(10);
        tree.insert(5);
        tree.insert(20);
        expect(tree.contains(20)).to.equal(true);
    });

    it("min y max funcionan", () => {
        const tree = new BST();
        tree.insert(8);
        tree.insert(3);
        tree.insert(15);
        expect(tree.min()).to.equal(3);
        expect(tree.max()).to.equal(15);
    });

    it("inOrder devuelve array ordenado", () => {
        const tree = new BST();
        tree.insert(5);
        tree.insert(3);
        tree.insert(7);
        expect(tree.inOrder()).to.deep.equal([3, 5, 7]);
    });
});
