/**
 * function 함수와 this 키워드
 * 
 * function 키워드로 만든 함수는 Function이라는 클래스의 인스턴스.
 * 즉, 함수는 객체이다.
 * 
 * 객체지향에서 인스턴스는 this 키워드를 사용할 수 있다.
 * function 키워드로 만든 함수에 this 키워드를 사용할 수 있다.
 *
 * 그러나 화살표 함수는 불가능하다
 */

/**
 * 메서드란?
 * 
 * function으로 만든 함수 표현식을 담고 있는 속성
 * 
 * 아래 클래스는 value와 method라는 두 개의 속성을 가진다
 */

class Example1 {
  value: number = 1
  method: () => void = function(): void {
    console.log(`value: ${this.value}`)
  }
}

let example1: Example1 = new Example1
example1.method()

/**
 * 클래스 메서드 구문
 * 
 * function을 생략할 수 있다.
 */

class Example2 {
  constructor(public value: number = 5) {}
  method(): void {
    console.log(`value: ${this.value}`)
  }
}

let example2 = new Example2
example2.method();