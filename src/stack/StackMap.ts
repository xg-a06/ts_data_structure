/**
 * push(element)：入栈，添加新元素到栈顶。
 * pop()：出栈，移除栈顶的元素，同时返回被移除的元素。
 * peek()：返回栈顶的元素，不对栈做任何修改。
 * isEmpty()：栈是否为空。
 * clear()：移除栈里的所有元素。
 * size()：返回栈里的元素个数。
 * toString(): 覆盖 Object 默认的 toString 方法
 */

class StackMap<T> {
  private items: Map<number, T>;

  constructor() {
    this.items = new Map();
  }

  push(item: T): void {
    this.items.set(this.items.size, item);
  }

  pop(): T | void {
    const key = this.items.size - 1;
    const result = this.items.get(key);
    this.items.delete(key);
    return result;
  }

  peek(): T | void {
    return this.items.get(this.items.size - 1);
  }

  isEmpty(): boolean {
    return this.items.size === 0;
  }

  clear(): void {
    this.items.clear();
  }

  size(): number {
    return this.items.size;
  }

  toString(): string {
    return this.items.toString();
  }
}

export default StackMap;
