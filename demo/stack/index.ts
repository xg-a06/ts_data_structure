/* eslint-disable import/no-unresolved */
import { StackArray, StackMap } from '@src';
import { baseConverter, hanoiStack } from './tools';

const stack1 = new StackArray<number>();
stack1.push(1);
stack1.push(2);
console.log(stack1.toString());
console.log(stack1.pop());
console.log(stack1.peek());
console.log(stack1.isEmpty());
console.log(stack1.size());
console.log(stack1.clear());
console.log(stack1.isEmpty());
console.log(stack1.size());

const stack2 = new StackMap<number>();
stack2.push(1);
stack2.push(2);
console.log(stack2.toString());
console.log(stack2.pop());
console.log(stack2.peek());
console.log(stack2.isEmpty());
console.log(stack2.size());
console.log(stack2.clear());
console.log(stack2.isEmpty());
console.log(stack2.size());

console.log(baseConverter(StackArray, 8039, 16));
console.log(baseConverter(StackArray, 8039, 8));
console.log(baseConverter(StackMap, 8039, 2));

hanoiStack(StackArray, 5).forEach((move) => {
  let result = '';
  move.forEach((value, key) => {
    result = `${result},${key}=>${value}`;
  });
  console.log(result.slice(1));
});
hanoiStack(StackMap, 5).forEach((move) => {
  let result = '';
  move.forEach((value, key) => {
    result = `${result},${key}=>${value}`;
  });
  console.log(result.slice(1));
});
