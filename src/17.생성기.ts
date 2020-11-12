/**
 * 생성기
 * yeild는 function* 키워드를 사용한 함수에서만 호출할 수 있다.
 * function* 키워드로 만든 함수를 생성기라고 한다.
 */

function* generator() {
  console.log('generator started...')
  let value = 1
  while (value < 5) {
    yield value++
  }
  console.log('generator finished...')
}

for (let value of generator()) {
  console.log(value)
}


/**
 * function* 키워드
 * 화살표 함수로 생성기를 만들 수 없다.
 * 
 * yield 키워드
 *   1. 반복기를 자동으로 만들어준다.
 *   2. 반복기 제공자 역할도 수행한다.
 */

function* rangeGenerator(from: number, to: number) {
  let value = from
  while(value < to) {
    yield value++
  }
}

// while 패턴으로 동작하는 생성기
let iterator = rangeGenerator(1, 3 + 1)
while (1) {
  const {value, done} = iterator.next()
  if (done) break
  console.log(value) // 1 2 3
} 

// for ... of 패턴으로 동작하는 생성기
for (let value of rangeGenerator(4, 6 + 1))
  console.log(value) // 4 5 6


/** 
 * 생성기를 이용한 stringIterable class 
 */

class IterableUsingGenerator<T> implements Iterable<T> {
  constructor(private values: T[], private currentIndex: number = 0) {}
  [Symbol.iterator] = function* () {
    while (this.currentIndex < this.values.length)
      yield this.values[this.currentIndex++]
  }
}

for (let item of new IterableUsingGenerator([1, 2, 3]))
  console.log(item) // 1 2 3

for (let item of new IterableUsingGenerator(['hello', 'world', '!']))
  console.log(item)


/**
 * yield* 키워드
 * 다른 생성기나 배열을 대상으로 한다.
 */

function* gen12() {
  yield 1
  yield 2
}

function* gen12345() {
  yield* gen12()
  yield* [3, 4]
  yield 5
}

for (let value of gen12345())
  console.log(value) // 1 2 3 4 5


/**
 * yield 연산자는 값을 반환한다.
 */

function* gen() {
  let count = 5
  let select = 0
  while (count--) {
    select = yield `you select ${select}`
  }
}
const random = (max, min=0) => Math.round(Math.random() * (max - min)) + min

const iter = gen()
while (1) {
  const {value, done} = iter.next(random(10, 1))
  if (done) break
  console.log(value)
}