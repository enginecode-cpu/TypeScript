/**
 * 함수 선언문
 * function 키워드를 이용한 함수 선언
 *
 * function(매개변수1: 타입, 매개변수2: 타입): 반환값 타입 {
 *      함수 내용
 * }
 *
 * void 타입
 * 값을 반환하지 않는 타입
 */

function add(a: number, b: number): number {
  return a + b
}

function print(name: string, age: number): void {
  console.log(`name: ${name}, age: ${age}`)
}


/**
 * 함수 시그니쳐
 * 함수의 타입을 시그니쳐라고 한다.
 *
 * (매개변수1 타입, 매개변수2 타입, ...) => 반환값 타입
 */

let print2: (name: string, age: number) => void = function (
  name: string,
  age: number
): void {
  console.log(`name: ${name}, age: ${age}`)
}


/**
 * type 키워드로 타입 별칭 만들기
 *
 * type 새로운 타입 = 기존 타입
 *
 * 매개변수의 개수나 타입, 반환 타입이 다른 함수를 선언하는
 * 잘못을 미연에 방지할 수 있다.
 */

type stringNumberFunc = (stringValue: string, numberValue: number) => void
let f: stringNumberFunc = function (a: string, b: number): void {}
let g: stringNumberFunc = function (c: string, d: number): void {}


/**
 * undefined 관련 주의 사항
 *
 * interface INameable {
 *      name: string
 * }
 * function getName(o: INameable) { return o.name }
 *
 * let n = getName(undefined)    // Error
 * console.log(n)
 *
 * 매개변수 값이 undefined인지 판별하는 코드를 작성해야한다.
 */

interface INameable {
  name: string
}
function getName(o: INameable): string {
  return o != undefined ? o.name : "unknown name"
}

let unName = getName(undefined)
console.log(unName)
console.log(getName({ name: "신짱구" }))


/**
 * 선택 속성이 있을 경우
 */

interface IAgeable {
  age?: number
}
function getAge(o: IAgeable): number {
  return o != undefined && o.age ? o.age : 0
}

console.log(getAge(undefined))
console.log(getAge(null))
console.log(getAge({ age: 35 }))


/**
 * undefined와 null
 * 타입스크립트에서는 두 값이 완전 동일하다.
 */

console.log(null == undefined)


/**
 * 선택적 매개 변수
 * 함수의 매개 변수 이름 뒤에 물음표를 붙여
 * 선택적 매개 변수를 만들 수 있다.
 *
 * function fn(arg1: string, arg2?: number): void {}
 */

function fn(arg1: string, arg2?: number): void {
  console.log(`arg1: ${arg1} arg2: ${arg2}`)
}

fn("TypeScript", 5)
fn("TypeScript")


/**
 * 선택적 매개 변수가 있는 함수의 시그니처는 물음표를 붙인다.
 *
 * type OptionalArgFunc = (string, number?) => void
 */
