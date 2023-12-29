/*
https://www.algoexpert.io/questions/min-max-stack-construction
*/

export class MinMaxStack {
  minMaxStack: {min: number; max: number}[]
  stack: number[]

  constructor() {
    this.minMaxStack = []
    this.stack = []
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }

  pop() {
    this.minMaxStack.pop()

    return this.stack.pop()
  }

  push(number: number) {
    this.stack.push(number)
    if (this.minMaxStack.length) {
      const min = Math.min(number, this.getMin())
      const max = Math.max(number, this.getMax())
      this.minMaxStack.push({min, max})
    } else {
      this.minMaxStack.push({min: number, max: number})
    }
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max
  }
}
