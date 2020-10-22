/**
 * 타입 변환
 * 타입이 있는 언어들은 특정 타입의 변숫값을 
 * 다른 타입의 값으로 변환할 수 있는 기능을 제공한다.
 * 
 * type conversion vs type casting vs type coercion
 * type conversion은 type casting과 type coercion을 모두 포함하는 의미
 * type casting: 명시적 타입 변환. 코드에서 직접 표현
 * type coercion: 암시적 타입 변환. 컴파일러가 알아서 처리
 */

/**
 * 타입 단언(type assertion)
 * 1. (<타입>객체)
 * 2. (객체 as 타입)
 */

interface INameable {
    name: string
};

let nameObj: object = { name: '신짱구' };

let name1 = (<INameable>nameObj).name;
let name2 = (nameObj as INameable).name;

console.log(name1, name2);