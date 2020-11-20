/**
 * Promise
 * 콜백 지옥에 빠진 코드를 다루기 쉽게 하기 위해서 만들어졌다.
 * 
 * const promise = new Promise(콜백 함수)
 * 
 * Promise의 콜백 함수는 resolve와 reject라는 두 개의 매개변수를 가진다.
 * 
 * (resolve, reject) => {}
 * 
 * 타입스크립트에서 Promise를 제네릭 클래서 형태로 사용한다.
 * 
 * const numPromise: Promise<number> = new Promise<number>(콜백 함수)
 * const strPromise: Promise<string> = new Promise<string>(콜백 함수)
 * const arrayPromise: Promise<number[]> = new Promise<number[]>(콜백 함수)
 * 
 * 콜백 함수 내부를 어떻게 사용하는지 살펴보면 다음과 같다.
 * 
 * new Promise<T>((
 *   resolve: (successValue: T) => void,
 *   reject: (any) => void
 * ) => {
 *   // 코드
 * })
 */

import { promises, readFile } from "fs";
import { andThen } from "ramda";

const readFilePromise = (filename: string): Promise<string> => {
  return new Promise((resolve: (value: string) => void,
                      reject: (error: Error) => void) => {
                        readFile(filename, (err: Error, buffer: Buffer) => {
                          if (err) reject(err)
                          else resolve(buffer.toString())
                        })
                      })
}

readFilePromise('./package.json').then((content: string) => {
  console.log(content)
  return readFilePromise('./tsconfig.json')
})
.then((content: string) => {
  console.log(content)
  return readFilePromise('.')
})
.catch((err: Error) => console.log(`error: ${err.message}`))
.finally(() => console.log('프로그램 종료'))


/**
 * Promise.resolve 메서드
 * Promise.resolve(값) 형태로 호출하면 항상 값은 then 메서드에서 얻을 수 있다.
 */

Promise.resolve(1).then(value => console.log(value))

Promise.resolve('Hello').then(value => console.log(value))

Promise.resolve([1, 2, 3]).then(value => console.log(value))

Promise.resolve({
  name: '신짱구',
  age: 5
}).then(value => console.log(value))


/**
 * Promise.reject 메서드
 * Promise.reject(Error 타입 객체)를 호출하면 'Error 타입 객체'는 항상
 * catch 메서드의 콜백 함수에서 얻을 수 있다.
 */

Promise.reject(new Error('에러 발생')).catch((err: Error) => console.log(err))


/**
 * then-체인
 * Promise 객체에서 then 메서드를 여러 번 호출할 수 있다.
 * 즉, then으로 반환된 값이 Promise라면 여러 번 then을 사용할 수 있다.
 */

Promise.resolve(1)
  .then((value: number) => {
    console.log(value)
    return Promise.resolve(true)
  })
  .then((value: boolean) => {
    console.log(value)
    return [1, 2, 3]
  })
  .then((value: number[]) => {
    console.log(value)
    return { name: '흰둥이', age: 10 }
  })
  .then((value: object) => {
    console.log(value)
  })


/**
 * Promise.all 메서드
 * Array 클래스는 every라는 이름의 인스턴스 메서드를 제공한다.
 * 배열의 모든 아이템이 어떤 조건을 만족하면 true를 반환한다.
 */

const isAllTrue = ((values: boolean[]) => values.every(value => value == true))

console.log(
  isAllTrue([true, true, true]),
  isAllTrue([true, false, true])
)

/**
 * Promise 클래스는 every처럼 동작하는 all이라는 클래스 메서드를 제공한다.
 * 
 * 사용법
 * all(프로미스 객체 배열: Promise[]): Promise<해소된 값들의 배열(혹은 any)>
 * 
 * Promise 객체들을 배열로 받아, 모든 객체를 대상으로 resolve된 값들의 배열로
 * 만든다. Promise.all 메서드는 이런 내용으로 구성된 Promise 객체를 반환하므로
 * resolve된 값들이 배열은 then 메서드를 호출해서 얻어야 한다.
 * 만약, 배열에 담긴 Promise 객체 중 reject가 발생하면 바로 Promise.reject를 반환한다.
 * reject된 값은 catch 메서드를 통해 얻는다.
 */

const getAllResolveResult = <T>(promises: Promise<T>[]) => Promise.all(promises)

getAllResolveResult<any>([Promise.resolve(true), Promise.resolve('hello')])
  .then(result => console.log(result))

getAllResolveResult<any>([Promise.reject(new Error('error')), Promise.resolve(1)])
  .then(result => console.log(result))
  .catch(err => console.log(err))


/**
 * Promise.race 메서드
 * Array 클래스는 배열의 내용 중 하나라도 조건을 만족하면 true를 
 * 반환하는 some이라는 인스턴스 메서드를 제공한다.
 * 
 */

const isAnyTrue = (values: boolean[]) => values.some((value => value == true))

console.log('isAnyTrue', isAnyTrue([false, true, false])) // true
console.log('isAnyTrue', isAnyTrue([false, false, false, false])) // false

/**
 * Promise.race 클래스 메서드는 배열에 담기 Promise 객체 중 하나라도 resolve 되면
 * 이 값을 담은 Promise.resolve 객체를 반환한다. 
 * 값이 reject 되면 Promise.reject 객체를 반환한다.
 * 
 * 사용법
 *  race(프로미스 객체 배열: Promise[]): Promise<가장 먼저 resolve된 객체의 값 타입(혹은 Error)>
 */