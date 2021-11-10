class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // add value at the end
    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // remove val from the end
    pop() {
        if (!this.head) return undefined;

        let oldTail = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }

        this.length--;
        return true;
    }

    // remove value from start
    shift() {
        if (!this.head) return undefined;

        let oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return true;
    }

    // add value at the start
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    // get node at index
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let counter, current;

        if (index <= this.length / 2) {
            current = this.head;
            counter = 0;

            while (counter !== index) {
                current = current.next;
                counter++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;

            while (counter !== index) {
                current = current.prev;
                counter--;
            }
        }

        return current;
    }

    // change node val at index
    set(index, val) {
        let foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = val;
            return true;
        }

        return false;
    }

    // insert new node at index
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }

    // remove node at index
    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length - 1) return !!this.pop();
        if (index === 0) return !!this.shift();

        let removedNode = this.get(index);
        let prev = removedNode.prev;
        let next = removedNode.next;

        prev.next = next;
        next.prev = prev;
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    }
}

let ll = new DoublyLinkedlist();
ll.push(9);
ll.push(6);
ll.push(12);
ll.push(4);


// Insertion        O(1)
// Removal          O(1)
// Searching        O(n)
// Access           O(n)