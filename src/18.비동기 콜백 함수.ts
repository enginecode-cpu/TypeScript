/**
 * 비동기와 동기에 대해서 알기 전에
 * 대표적인 함수를 살펴본다.
 * 
 * readFileSync, readFile은 둘 다 파일을 읽는 역할을 한다.
 * 그런데 readFileSync는 동기 방식이고,
 * readFile는 비동기 방식이다.
 * 
 * readFileSync(동기): 파일을 전부 다 읽을 때까지 프로그램의 동작을 잠시 멈춘다.
 * readFile은(비동기): 프로그램의 동작을 멈추지 않는 대신 결과를 콜백 함수로 얻게 한다.
 */

/**
 * readFileSync와 readFile API
 * 
 * readFileSync는 파일을 읽어서 Buffer라는 타입으로 전달한다.
 * Buffer는 NodeJS가 제공하는 클래스로서 바이너리 데이터를
 * 저장하는 기능을 수행한다. Buffer의 데이터를 문자열로 만들 때는
 * Buffer의 toString 메서드를 사용한다.
 * 
 * readFile은 예외가 발생하면 이 예외를 첫 번째 매개변수에 전달한다.
 */


import {readFileSync, readFile} from 'fs';

console.log('read package.json using synchronous api...')
const buffer: Buffer = readFileSync('./package.json')
console.log(buffer.toString())

readFile('./package.json', (error: Error, buffer: Buffer) => {
  if (error) throw error
  else {
    console.log('read package.json using asynchronous api...')
    console.log(buffer.toString())
  }
})

const readFilePromise = (filename: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    readFile(filename, (error: Error, buffer: Buffer) => {
      if (error)
        reject(error)
      else
        resolve(buffer.toString())
    })
  })
}

(async () => {
  const content = await readFilePromise('./package.json')
  console.log('read package.json using async/await api...')
  console.log(content)
})()