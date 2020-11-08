/**
 * 반복기의 특징
 *   1. next라는 이름의 메서드를 제공한다.
 *   2. next 메서드는 value와 done이라는 두 개의 속성을 가진 객체를 반환한다.
 */

/**
 * 반복기를 제공하는 역할을 하는 함수를 반복기 제공자라고 한다.
 */

const createRangeIterable = (from: number, to: number) => {
  let currentValue = from
  return {
    next() {
      const value = currentValue < to ? currentValue++ : undefined
      const done = value == undefined
      return {value, done}
    }
  }
}

const iterator = createRangeIterable(1, 3 + 1)
while (true) { 
  const {value, done} = iterator.next()
  if (done) break
  console.log(value)
}

/**
 * range 함수와 반복기
 */

import {range} from './range'
for (let value of range(1, 3 + 1))
  console.log(value)

/** 
 * const iterable = createRangeIterable(1, 3 + 1)
 * for (let value of iterable)
 *   console.log(value) // [Symbol.iterator] 메서드가 있어야 합니다
 * 
 * 이것은 클래스로 구현해야하는 것을 의미한다.
 */

class RangeIterable {
  constructor(public from: number, public to: number) {}
  [Symbol.iterator]() {
    const that = this
    let currentValue = that.from
    return {
      next() {
        const value = currentValue < that.to ? currentValue++ : undefined
        const done = value == undefined
        return {value, done}
      }
    }
  }
}

const iterable = new RangeIterable(5, 10 + 1)

for (let value of iterable)
  console.log(value)

