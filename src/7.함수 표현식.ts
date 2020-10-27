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