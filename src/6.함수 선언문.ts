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