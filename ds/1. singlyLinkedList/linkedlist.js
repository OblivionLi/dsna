class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedlist {
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
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // remove val from the end
    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    // remove value from start
    shift() {
        if (!this.head) return undefined;

        let current = this.head;
        this.head = current.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return current;
    }

    // add value at the start
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    // get node at index
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        let counter = 0;

        while (counter !== index) {
            current = current.next;
            counter++;
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
        let prevNode = this.get(index - 1);

        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;

        this.length++;
        return true;
    }

    // remove node at index
    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length - 1) return !!this.pop();
        if (index === 0) return !!this.shift();

        let prevNode = this.get(index - 1);
        let removeNode = prevNode.next;

        prevNode.next = removeNode.next;

        this.length--;
        return true;
    }

    // reverse list
    reverse() {
        if (!this.head) return undefined;

        let node = this.head;
        let prev = null;
        let next;

        this.head = this.tail;
        this.tail = node;
        
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            
            node.next = prev;

            prev = node;
            node = next;
        }

        return this;
    }

    // print list
    print() {
        let arr = [];
        let current = this.head;

        while (current) {
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr);
    }
}

let ll = new SinglyLinkedlist();
ll.push(13);
ll.push(4);
ll.push(7);
ll.push(22);
ll.push(1);
ll.push(6);


// Insertion        O(1)
// Removal          O(1) or O(n)
// Searching        O(n)
// Access           O(n)