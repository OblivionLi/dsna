class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add value at the start
    enqueue(value) {
        let newNode = new Node(value);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    // remove value from start
    dequeue() {
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

// FIFO
// FIRST in FIRST out

let queue = new Queue ();

queue.enqueue(10);
queue.enqueue(2);
queue.enqueue(6);
queue.enqueue(23);
queue.enqueue(1);

// Insertion        O(1)
// Removal          O(1)
