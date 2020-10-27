/**
 * 함수는 객체다
 */

let sum = new Function('a', 'b', 'return a + b');
const res = sum(1, 10);
console.log(res);

let sum2 = function(a: number, b: number) { return a + b; }
console.log(sum2(1, 10));

/**
 * 일등 함수
 * 함수와 변수를 구분하지 않는다
 */

let fx = function(a: number, b: number) { return a + b; }
fx = function(a: number, b: number) { return a - b; }

/**
 * 익명 함수
 */

let value = (function(a: number, b: number) { return a + b; })(1, 2);
console.log(value);

/**
 * const 키워드와 함수 표현식
 * 함수 표현식은 let보다는 const 키워드로 선언하는 것이 좋다
 * 
 * let은 언젠가 함수가 다른 내용으로 바뀔 수 있다.
 * 
 * const는 함수 내용이 절대 바뀔 수 없다.
 */