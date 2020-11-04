/**
 * 명령형 프로그래밍 & 선언형 프로그래밍
 * 
 * 1. 명령형 프로그래밍
 *   - 입력 데이터 얻기
 *   - 입력 데이터 가공해 출력 데이터 생성
 *   - 출력 데이터 출력
 * 
 *   for( ; ; ) {
 *     입력 데이터 얻기
 *     입력 데이터 가공해 출력 데이터 생성
 *     출력 데이터 출력
 *   }
 * 
 * 2. 선언형 프로그래밍
 *   - 문제를 푸는 데 필요한 모든 데이터 배열에 저장
 *   - 입력 데이터 배열을 가공해 출력 데이터 배열 생성
 *   - 출력 데이터 배열에 담긴 아이템 출력
 */

/**
 * fold: 배열 데이터 접기
 * 아이템 타입이 T라고 했을 때 배열은 T[]로 표현할 수 있다.
 * 폴드 함수는 T[] 타입 배열을 가공해 T 타입 결과로 만든다.
 */

const fold = <T>(array: T[], callback: (result: T, val: T) => T, initValue: T) => {
  let result: T = initValue
  for(let index = 0; index < array.length; ++index) {
    const value = array[index]
    result = callback(result, value)
  }
  return result
}

import { range } from './11.배열'

// 입력 데이터 생성
let numbers5: number[] = range(1, 100 + 1)

// 입력 데이터 가공
let result = fold(numbers5, (result, value) => result + value, 0)
console.log(result)

/**
 * 1에서 100까지 홀수의 합 구하기
 */

// 명령형
let oddSum = 0
for(let val = 1; val <= 100; val += 2) {
  oddSum += val
}
console.log(oddSum)

// 선언형
// 1. filter: 조건에 맞는 아이템 골라내기
const filter = <T>(array: T[], callback: (value: T, index?: number) => boolean): T[] => {
  let result: T[] = []
  for(let index: number = 0; index < array.length; ++index) {
    const value = array[index]
    if(callback(value, index))
      result = [...result, value]
  }
  return result
}

// 2. 합 구현하기
let numbers6: number[] = range(1, 100 + 1)
const isOdd = (n: number): boolean => n % 2 != 0
const result2 = fold(filter(numbers6, isOdd), (result, value) => result + value, 0)
console.log(result2)


/**
 * 1에서 100까지 짝수의 합 구하기
 */

// 명령형
let evenSum = 0
for(let val = 0; val <= 100; val += 2) {
  evenSum += val
}
console.log(evenSum)

// 선언형
let numbers7: number[] = range(0, 100 + 1)
const isEven = (n: number): boolean => n % 2 == 0
const result3 = fold(filter(numbers7, isEven), (result, value) => result + value, 0)
console.log(result3)