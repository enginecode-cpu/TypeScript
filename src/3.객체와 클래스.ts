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

let hyungman: Person = new Person();
hyungman.name = '형만';
hyungman.age = 35;
console.log(hyungman);

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
let hyungman2: Person2 = new Person2('신형만', 35);
console.log(hyungman2);

/**
 * 위의 코드는 다음과 같다
 * class Person2 {
 *      name: string
 *      age: number
 *      constructor(name: string, age?: number) {
 *          this.name = name;
 *          this.age = age;
 *      }
 * }
 */