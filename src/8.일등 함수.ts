/**
 * 콜백 함수
 * 
 * 함수 표현식을 매개 변수로 받을 수 있다
 * 매개 변수 형태로 동작하는 함수를 콜백 함수라고 한다.
 */

const gx = (callback: () => void): void => callback()

const init = (callback: () => void): void => {
    console.log('default initialization finished')
    callback()
    console.log('all initialization finished')
}

init(() => console.log('custom initialization finished'))