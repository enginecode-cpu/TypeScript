/**
 * 클래스 선언문
 * class 클래스 이름 {
 *      [private | protect | public] 속성 이름[?]: 속성 타입[...]
 * }
 */

class Person {
    name: string
    age?: number
}

let hyungman: Person = new Person()
hyungman.name = '형만'
hyungman.age = 35
console.log(hyungman)

/**
 * 접근 제한자
 * 클래스의 속성은 public, private, protect와 같은 접근 제한자를
 * 이름 앞에 붙일 수 있다.
 */

/**
 * 생성자
 * constructor를 생성자라고 한다.
 */
class Person2 {
    constructor(public name: string, public age?: number) {}
}
let hyungman2: Person2 = new Person2('신형만', 35)
console.log(hyungman2)

/**
 * 위의 코드는 다음과 같다
 * class Person2 {
 *      name: string
 *      age: number
 *      constructor(name: string, age?: number) {
 *          this.name = name
 *          this.age = age
 *      }
 * }
 */

/**
 * 인터페이스 구현
 * 클래스가 인터페이스를 구현할 때는 implements 키워드를 사용한다
 * 
 * class 클래스 이름 implements 인터페이스 이름 {
 *     ...
 * }
 * 
 * 클래스 몸통에는 반드시 인터페이스가 정의하고 있는 속성을 
 * 멤버 속성으로 포함해야한다.
 */

interface IPerson3 {
    name: string
    age?: number
}

class Person3 implements IPerson3 {
    name: string
    age: number
}

/**
 * 다음과 같이 해도 된다.
 */
interface IPerson4 {
    name: string
    age?: number
}

class Person4 implements IPerson4 {
    constructor(public name: string, public age: number) {}
}

let jjang_gu: Person4 = new Person4('신짱구', 5)
console.log(jjang_gu)

/**
 * 추상 클래스
 * class 앞에 abstract를 붙여 사용한다.
 * 추상 클래스는 나를 상속하는 다른 클래스에서
 * 이 속성이나 메서드를 구현하게 한다.
 * 
 * abstract class 클래스 이름 {
 *      abstract 속성 이름: 속성 타입
 *      abstract 메서드 이름() {}
 * }
 * 
 * 추상 클래스는 new 키워드를 통해서 객체를 만들 수 없다
 */

abstract class AbstractPerson5 {
    abstract name: string
    constructor(public age?: number) {}
}

/**
 * 클래스의 상속
 * extends 키워드를 사용해 상속 받는다.
 * 
 * class 상속 받는 클래스 extends 부모 클래스 {
 *      ...
 * }
 * 
 * 부모 클래스의 생성자를 super 키워드로 호출할 수 있다.
 */

class Person5 extends AbstractPerson5 {
    constructor(public name: string, public age?: number) {
        super(age)
    }
}

let chulsoo = new Person5('김철수', 5)
console.log(chulsoo)

/**
 * static 속성
 * 
 * class 클래스 이름 {
 *      static 정적 속성 이름: 속성 타입
 * }
 * 
 * 사용법
 * 클래스 이름.정적 속성 이름
 */

class A {
    static initValue = 1
}
let initVal = A.initValue
console.log(initVal)