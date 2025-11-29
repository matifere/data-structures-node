export class Stack {
    constructor() {
        this.stack = [];
    }

    push(elem) {
        this.stack.push(elem);
    }

    size() {
        return this.stack.length;
    }

    pop() {
        return this.stack.pop()
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

}
//export default Stack;