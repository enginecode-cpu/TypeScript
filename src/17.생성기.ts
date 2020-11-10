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