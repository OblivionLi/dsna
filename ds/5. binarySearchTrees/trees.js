class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (!current.value) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (value > current.value) {
                if (!current.value) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(val) {
        if (!this.root) return false;

        let current = this.root;
        let found = false;

        while (!found && current) {
            if (val < current.value) {
                current = current.left;
            } else if (val > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }

        if (!found) return undefined;
        return current;
    }

    BFS() {
        let data = []
        let queue = []
        let node = this.root;

        queue.push(node);

        while (queue.length) {
            node = queue.shift()
            data.push(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    DFSpreOrder() {
        let data = []

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root)

        return data;
    }

    DPSpostOrder() {
        let data = []

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(this.root)

        return data;
    }

    DPSinOrder() {
        let data = []

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(this.root)

        return data;
    }
}

let binarysearch = new BinarySearchTree();


// Insertion        O(log n)
// Searching        O(log n)