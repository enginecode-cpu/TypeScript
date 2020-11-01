/**
 * 배열
 * 
 * 자바스크립트에서 배열은 객체이다.
 */

const arr = [1, 2, 3]
const object = { name: '짱구', age: 5 }

console.log(`arr: ${Array.isArray(arr)},`, `object: ${Array.isArray(object)}`)

/**
 * 배열의 타입
 * 
 * 타입스크립트에서 배열의 타입은 '아이템 타입[]'이다.
 * 예를 들어, 배열의 아이템이 number 타입이면 배열의 타입은 number[]
 * 배열의 아이템이 string 타입이면 배열의 타입은 string[]
 */

const numArray: number[] = [1, 2, 3]
const stringArray: string[] = ['TypeScript', 'JavaScript']

console.log(numArray)
console.log(stringArray)

type typePerson = {name: string, age?: number}
const personArray: typePerson[] = [{name: '짱구'}, {name: '철수', age: 5}]

console.log(personArray)