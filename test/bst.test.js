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

  // -------------- Tests extras para mayor robustez --------------

  it("inOrder en árbol vacío devuelve []", () => {
    const tree = new BST();
    const arr = tree.inOrder();
    expect(arr).to.be.an("array").that.deep.equals([]);
  });

  it("contains devuelve false para un valor que no existe", () => {
    const tree = new BST();
    [10, 5, 20, 3, 7].forEach((n) => tree.insert(n));
    expect(tree.contains(999)).to.equal(false);
    expect(tree.contains(-1)).to.equal(false);
  });

  it("min y max funcionan con negativos y positivos", () => {
    const tree = new BST();
    [-10, 0, 10, 5, -5].forEach((n) => tree.insert(n));
    expect(tree.min()).to.equal(-10);
    expect(tree.max()).to.equal(10);
  });

  it("no permite duplicados: size y contenido no cambian al insertar repetidos", () => {
    const tree = new BST();
    const values = [5, 3, 7, 3, 5, 8, 2]; // hay duplicados 3 y 5
    values.forEach((v) => tree.insert(v));

    // tamaño esperado = cantidad de valores únicos
    const unique = Array.from(new Set(values)).sort((a, b) => a - b);
    expect(tree.size()).to.equal(unique.length);

    // inOrder debe contener exactamente los únicos en orden ascendente
    expect(tree.inOrder()).to.deep.equal(unique);
  });

  it("size incrementa y decrementa correctamente al insertar y eliminar", () => {
    const tree = new BST();
    expect(tree.size()).to.equal(0);

    tree.insert(10);
    expect(tree.size()).to.equal(1);

    tree.insert(5);
    tree.insert(15);
    expect(tree.size()).to.equal(3);

    // eliminar existente
    const removed = tree.remove(5);
    expect(removed).to.equal(true);
    expect(tree.size()).to.equal(2);

    // eliminar inexistente
    const removed2 = tree.remove(999);
    expect(removed2).to.equal(false);
    expect(tree.size()).to.equal(2);
  });

  it("remove elimina una hoja y retorna true", () => {
    const tree = new BST();
    [10, 5, 15, 3, 7].forEach((n) => tree.insert(n)); // 3 y 7 son hojas
    expect(tree.contains(3)).to.equal(true);

    const r = tree.remove(3);
    expect(r).to.equal(true);
    expect(tree.contains(3)).to.equal(false);

    // inOrder ya no debe contener el 3
    expect(tree.inOrder()).to.not.include(3);
  });

  it("remove elimina un nodo con un solo hijo y mantiene la propiedad BST", () => {
    const tree = new BST();
    // Construimos árbol donde 5 tendrá solo hijo izquierdo 3
    [10, 5, 15, 3].forEach((n) => tree.insert(n));
    expect(tree.contains(5)).to.equal(true);

    const beforeSize = tree.size();
    const r = tree.remove(5);
    expect(r).to.equal(true);
    expect(tree.size()).to.equal(beforeSize - 1);
    expect(tree.contains(5)).to.equal(false);

    // inOrder debe seguir ordenado
    const arr = tree.inOrder();
    const sorted = [...arr].sort((a, b) => a - b);
    expect(arr).to.deep.equal(sorted);
  });

  it("remove elimina un nodo con dos hijos (p.ej. la raíz) y mantiene la propiedad BST", () => {
    const tree = new BST();
    // Árbol completo con raíz que tiene dos hijos
    [10, 5, 15, 3, 7, 12, 18].forEach((n) => tree.insert(n));
    expect(tree.contains(10)).to.equal(true);

    const beforeSize = tree.size();
    const r = tree.remove(10); // eliminar raíz con dos hijos
    expect(r).to.equal(true);
    expect(tree.contains(10)).to.equal(false);
    expect(tree.size()).to.equal(beforeSize - 1);

    // inOrder debe seguir ordenado y sin el 10
    const arr = tree.inOrder();
    const sorted = [...arr].sort((a, b) => a - b);
    expect(arr).to.deep.equal(sorted);
    expect(arr).to.not.include(10);
  });

  it("remove devuelve false si el valor a eliminar no existe", () => {
    const tree = new BST();
    [8, 4, 12].forEach((n) => tree.insert(n));
    expect(tree.remove(999)).to.equal(false);
  });
});
