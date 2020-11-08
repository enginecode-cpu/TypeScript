/**
 * 순수함수란?
 * 부수 효과가 없는 함수.
 * 
 * 부수 효과란?
 * 고유한 목적 이외의 다른 효과가 나타나는 것을 의미하며, 부작용이라고도 한다.
 * 
 * 순수 함수의 조건
 *   1. 함수 안에 입출력 관련 코드가 없어야한다.
 *   2. 함수 안에 매개변수값을 변경시키지 않는다.
 *   3. 함수는 안에서 만들어진 결과를 반환한다.
 *   4. 함수 내부에 전역 변수나 정적 변수를 사용하지 않는다.
 *   5. 함수가 예외를 발생시키지 않는다.
 *   6. 함수가 콜백 함수로 구현되었거나 함수 안에 콜백 함수를 사용하는 코드가 없다.
 *   7. 함수 안에 Promise와 같은 비동기 방식으로 동작하는 코드가 없다.
 */

function pure(a: number, b: number) {return a + b}

function imppure1(array: number[]): void {
  array.push(4)
  array.splice(0, 1)
}
let glob = 10;
function impure2(x: number) {return x + glob}

/**
 * 타입 수정자 readonly
 * 매개 변수에 let이나 const 키워드가 없으므로 readonly를 사용하는 것이다.
 * readonly는 const와 같이 불변이다.
 */

/**
 * 깊은 복사와 얕은 복사
 * 순수 함수를 구현할 때는 매개변수가 불변성을 유지해야 하므로 깊은 복사를 해야한다.
 * 깊은 복사를 하여 매개변수값이 변경되지 않도록 해야한다. 즉, 원본이 변경되지 않는다. 
 */

let original = 1
let copied = original
copied += 2
console.log(original, copied)


/**
 * 객체와 배열은 얕은 복사 방식으로 동작한다.
 */

const originArray = [5, 2, 9, 7]
const copiedArray = originArray
copiedArray[0] = 0
console.log(originArray, copiedArray)
console.log(originArray == copiedArray)


/** 
 * 전개 연산자와 깊은 복사
 * 전개 연산자를 이용하면 깊은 복사를 할 수 있다.
*/

const originArray2 = [1, 2, 3, 4]
const deepCopiedArray = [...originArray2]
deepCopiedArray[0] = 0
console.log(originArray2, deepCopiedArray)


/**
 * 원본 배열을 변경하지 않는 sort 함수
 */

import { pureSort } from './sort'

let beforeArray = [9, 3, 4, 1, 5]
const afterArray = pureSort(beforeArray)
console.log(beforeArray, afterArray)