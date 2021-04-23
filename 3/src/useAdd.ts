import {NumberToNumberFunc, sunny} from './number-to-number'

let fn: NumberToNumberFunc = sunny(1)

let result = fn(2)
console.log(result) // 3
console.log(sunny(2)(2)) // 4