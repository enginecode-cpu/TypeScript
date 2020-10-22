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
    return a + b;
}

function print(name: string, age: number): void {
    console.log(`name: ${name}, age: ${age}`);
}

/**
 * 함수 시그니쳐
 * 함수의 타입을 시그니쳐라고 한다.
 * 
 * (매개변수1 타입, 매개변수2 타입, ...) => 반환값 타입
 */

let print2: (name: string, age: number) => void = function (name: string, age: number): void {
    console.log(`name: ${name}, age: ${age}`);
}

/**
 * type 키워드로 타입 별칭 만들기
 * 
 * type 새로운 타입 = 기존 타입
 * 
 * 매개변수의 개수나 타입, 반환 타입이 다른 함수를 선언하는
 * 잘못을 미연에 방지할 수 있다.
 */

type stringNumberFunc = (stringValue: string, numberValue: number) => void;
let f: stringNumberFunc = function(a: string, b: number): void {};
let g: stringNumberFunc = function(c: string, d: number): void {};