class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add to end
    push(value) {
        let newNode = new Node(value);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    // remove from end
    pop() {
        if (!this.first) return null;

        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;

        return temp.value;
    }
}

// LIFO
// LAST in FIRST out


let stack = new Stack();

stack.push(10);
stack.push(2);
stack.push(6);
stack.push(23);
stack.push(1);

// Insertion        O(1)
// Removal          O(1)
