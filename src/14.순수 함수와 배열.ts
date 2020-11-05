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