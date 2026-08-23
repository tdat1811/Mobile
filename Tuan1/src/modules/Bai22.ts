class Stack<T> {
  items: T[] = [];
  push(item: T): void {
    this.items.push(item);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
  isEmpty(): boolean {
    if (this.items.length == 0) {
      return true;
    }
    return false;
  }
}

const stack = new Stack<number>();
console.log("Empty:", stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack:", stack.items);

console.log("Peek:", stack.peek());

console.log("Pop:", stack.pop());

console.log("Sau khi pop:", stack.items);

console.log("Peek:", stack.peek());

console.log("Empty:", stack.isEmpty());
