class MaxHeap {
  private _heap: number[] = [];

  constructor() {
    this.heap = [];
  }

  public get heap(): number[] {
    return this._heap;
  }

  public set heap(value: number[]) {
    this._heap = value;
  }

  parentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index: number) {
    return 2 * index + 1;
  }

  rightChildIndex(index: number) {
    return 2 * index + 2;
  }

  swap(a: number, b: number) {
    const aux = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = aux;
  }

  insert(item: number) {
    this.heap.push(item);

    let index = this.heap.length - 1;
    let parent = this.parentIndex(index);

    while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
      this.swap(parent, index);

      index = this.parentIndex(index);
      parent = this.parentIndex(index);
    }
  }

  delete() {
    const item = this.heap.shift();

    this.heap.unshift(this.heap.pop() as number);

    let index = 0;
    let leftChild = this.leftChildIndex(index);
    let rightChild = this.rightChildIndex(index);

    while (
      (this.heap[leftChild] && this.heap[leftChild] > this.heap[index]) ||
      this.heap[rightChild] > this.heap[index]
    ) {
      let max = leftChild;

      if (this.heap[rightChild] && this.heap[rightChild] > this.heap[max]) {
        max = rightChild;
      }

      this.swap(max, index);

      index = max;
      leftChild = this.leftChildIndex(max);
      rightChild = this.rightChildIndex(max);
    }

    return item;
  }
}

const heapSort = (unorderedArray: number[]): number[] => {
  const sortedArray: number[] = [];
  const heap = new MaxHeap();

  for (let i = 0; i < unorderedArray.length; ++i) {
    heap.insert(unorderedArray[i]);
  }

  for (let i = 0; i < unorderedArray.length; ++i) {
    sortedArray.push(heap.delete() as number);
  }

  return sortedArray;
};

export default heapSort;