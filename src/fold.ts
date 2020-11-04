export const fold = <T>(array: T[], callback: (result: T, val: T) => T, initValue: T) => {
  let result: T = initValue
  for(let index = 0; index < array.length; ++index) {
    const value = array[index]
    result = callback(result, value)
  }
  return result
}