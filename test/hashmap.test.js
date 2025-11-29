import { HashMap } from "../src/hashmap.js";
import { expect } from "chai";

describe("HashMap", () => {
    it("set y get funcionan", () => {
        const map = new HashMap();
        map.set("a", 10);
        expect(map.get("a")).to.equal(10);
    });

    it("has detecta claves existentes", () => {
        const map = new HashMap();
        map.set("x", 42);
        expect(map.has("x")).to.equal(true);
    });

    it("remove elimina un elemento", () => {
        const map = new HashMap();
        map.set("k", 99);
        map.remove("k");
        expect(map.get("k")).to.equal(undefined);
    });

    it("colisiones funcionan (misma posición del hash)", () => {
        const map = new HashMap(2); // fuerza colisiones
        map.set("ab", 1);
        map.set("ba", 2);
        // hash de "ab" y "ba" podría coincidir en array de largo 2
        expect(map.get("ab")).to.equal(1);
        expect(map.get("ba")).to.equal(2);
    });
});
