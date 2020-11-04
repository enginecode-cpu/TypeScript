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