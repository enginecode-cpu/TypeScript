/**
 * let 변수 이름: 타입 [=초깃값]
 * const 변수 이름: 타입 = 초깃값
 */

let n: number
let num: number = 1

let str: string = 'Hello TypeScript'
let obj: object = {}


/**
 * let은 자바스크립트와 다르게 타입 주석으로 명시한 타입에 해당하는
 * 값으로만 바꿀 수 있다. 다른 타입으로 바꾸게 되면 오류가 발생한다.
 */

/**
 * 타입 추론
 * 자바스크립트와 호환성을 위해 타입 주석 부분을 생략할 수 있다.
 * 타입스크립트 컴파일러는 다음과 같은 코드를 만나면 대입 연산자(=) 오른쪽 값에
 * 따라 변수의 타입을 저장한다. 이것을 타입 추론이라고 한다
 */

let x = 1      // x 타입을 number로 판단
let y = 2      // y 타입을 number로 판단
let b = true    // b 타입을 number로 판단
let s = 'typescript' // s 타입을 number로 판단
let o = {}     // o 타입을 number로 판단


/**
 * any 타입
 * 자바스크립트와의 호환성을 위해서 any 타입이 존재한다.
 * 타입과 무관하게 어떤 종류의 값도 저장할 수 있다
 */

let a: any = 0
a = 'string type'
a = true
a = {}


/**
 * undefined 타입
 * 자바스크립트에서는 타입을 지정하지 않으면 undefined가 되었다.
 * 그러나 타입스크립트에서는 타입이기도 하고 값이기도 하다.
 * undefined는 최하위 타입이다.
 */

let u: undefined = undefined