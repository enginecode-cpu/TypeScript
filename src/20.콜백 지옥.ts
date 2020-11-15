/**
 * 콜백 지옥
 * 비동기 API를 사용하면 콜백 함수에서 다시 또 다른 비동기 API를
 * 호출하는 코드를 만들 때 코드가 복잡해진다.
 */

import { read, readFile } from "fs";

readFile('./package.json', (err: Error, buffer: Buffer) => {
  if (err) throw err
  else {
    const content: string = buffer.toString()
    console.log(content)
  }

  readFile('./tsconfig.json', (err: Error, buffer: Buffer) => {
    if (err) throw Error
    else {
      const content: string = buffer.toString()
      console.log(content)
    }
  })
})