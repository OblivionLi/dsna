class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority <= parent.priority) break;

            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 22;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];

                if (leftChild.priority > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];

                if (
                    (swap === null && leftChild.priority > element.priority) 
                    || 
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }

    }

    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }
}

let queue = new PriorityQueue();

queue.enqueue("common cold", 1);
queue.enqueue("gunshot wound", 5);
queue.enqueue("high fever", 2);


// Insertion        O(log n)
// Removal          O(log n)
// Search           O(n)