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

/**
 * 문자열과 배열 간 변환
 * 
 * 타입스크립트에서는 문자 타입이 없고, 문자열의 내용 또한 변경할 수 없다.
 * 이런 특징 때문에 문자열을 배열로 변경해야한다.
 * 
 * 문자열을 배열로 전환할 때, String 클래스의 split 메서드를 사용한다.
 * 
 * split 메서드
 * 문자열을 문자로 쪼개는 기준인 구분자를 입력받아 문자열을 string[] 배열로 만든다.
 * 
 * split(구분자: string): string[]
 */

const split = (str: string, delim: string = ''): string[] => str.split(delim)

console.log(split('Hello'))
console.log(split('TypeScript'))

/**
 * 배열을 문자열로 변환할 때, Array에 join 메서드를 사용한다.
 * 
 * join(구분자: string): string
 */

const join = (strArray: string[], delim: string = ''): string => strArray.join(delim)

console.log(join(['H', 'e', 'l', 'l', 'o']))
console.log(join(['T', 'y', 'p', 'e', 'S', 'c', 'r', 'i', 'p', 't']))

/**
 * 인덱스 연산자
 * 
 * 배열의 특정 위치에 있는 원소를 얻는다.
 */

const numbers: number[] = [1, 2, 3, 4, 5]
for(let index = 0; index < numbers.length; index++) {
  const item: number = numbers[index]
  console.log(item)
}

/**
 * 배열의 비구조화 할당
 * 
 * []를 사용하여 비구조 할당문을 얻는다.
 */

const numbers2: number[] = [1, 2, 3, 4, 5]
const [first, second, third, ...rest] = numbers2
console.log(`${first} ${second} ${third}`)
console.log(rest)

/**
 * for...in 문
 * 
 * for(변수 in 객체) {
 *   code...
 * }
 * 
 * 배열도 객체이므로 사용할 수 있다.
 * 배열의 인덱스값을 순회한다.
 */

const names: string[] = ['신짱구', '김철수', '흰둥이']

for(let index in names) {
  const name = names[index]
  console.log(name)
}

/**
 * 객체를 사용할 때는 객체가 가진 속성을 대상으로 순회한다.
 */

const dog = {name: '흰둥이', age: 5}
for(let property in dog) {
  console.log(`${property}: ${dog[property]}`)
}

/**
 * for...of 문
 * 
 * for(let 변수 of 객체) {
 *   code...
 * }
 * 
 * for...of 문은 원소를 대상으로 순회를 한다.
 */

for(let name of names) {
  console.log(name)
}