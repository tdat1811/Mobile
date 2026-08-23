class Repository<T> {
  items: T[] = [];
  add(item: T): void {
    this.items.push(item);
  }
  getAll(): T[] {
    return this.items;
  }
}

const repo = new Repository<string>();
repo.add("Apple");
repo.add("Orange");
repo.add("Banana");
console.log(repo.getAll());
