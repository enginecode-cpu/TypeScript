/**
 * 메서드 체인 방식의 배열
 */

const multiply2 = (result: number, val: number) => result * val

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let tempResult = numbers.filter(val => val % 2 != 0)
                        .map(val => val ** 2)
                        .reduce(multiply2, 1)
const result2 = Math.round(Math.sqrt(tempResult))
console.log(result2)


/**
 * filter 메서드
 * 배열의 타입이 T[]일 때, 다음과 같이 설계되었다.
 * 
 * filter(callback: (value: T, index?: number): boolean): T[]
 */

/**
 * 배열을 반으로 분리하기
 */

import { range } from './range'

const array: number[] = range(1, 10 + 1)
const center = array.length / 2

const beforeArray: number[] = array.filter((val, index) => index < center)
const afterArray: number[] = array.filter((val, index) => index >= center)

console.log(beforeArray)
console.log(afterArray)


/**
 * map 메서드
 * 배열의 타입이 T[]일 때, 다음과 같이 설계되어 있다.
 * 
 * map(callback(value: T, index?: number): Q): Q[]
 */

let squares: number[] = range(1, 5 + 1).map(val => val ** 2)
console.log(squares)

let names: string[] = range(1, 5 + 1).map((val, index) => `[${index}]: ${val}`)
console.log(names)