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


/**
 * 정적 메서드
 * 
 * 클래스의 속성에 static을 붙여 정적으로 만들 수 있다.
 * 
 * 호출 시, '클래스 이름.정적 메서드()' 형태로 한다.
 */

class Example3 {
  static staticMethod() {
    return 'I\'m static method in class Example3'
  }
}

class Example4 {
  static staticMethod() {
    return 'I\'m static method in class Example4'
  }
}

console.log(Example3.staticMethod())
console.log(Example4.staticMethod())


/**
 * 메서드 체인
 * 
 * 객체의 메서드를 이어서 계속 호출하는 방식
 * 메서드 체인을 구현하기 위해서는 항상 this를 반환하면 된다.
 */

class Calculator {
  constructor(public value: number = 0) {}
  add(value: number) {
    this.value += value
    return this
  }
  multiply(value: number) {
    this.value *= value
    return this
  }
}

let calculator = new Calculator
let answer = calculator.add(1).add(6).multiply(7).value
console.log(answer)