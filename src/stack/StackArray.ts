/**
 * push(element)：入栈，添加新元素到栈顶。
 * pop()：出栈，移除栈顶的元素，同时返回被移除的元素。
 * peek()：返回栈顶的元素，不对栈做任何修改。
 * isEmpty()：栈是否为空。
 * clear()：移除栈里的所有元素。
 * size()：返回栈里的元素个数。
 * toString(): 覆盖 Object 默认的 toString 方法
 */

class StackArray<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | void {
    return this.items.pop();
  }

  peek(): T | void {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this.items = [];
  }

  size(): number {
    return this.items.length;
  }

  toString(): string {
    return this.items.toString();
  }
}

export default StackArray;
