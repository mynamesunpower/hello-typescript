import {range} from './utils/range'

let reduceMultiply: number = range(1, 10 + 1)
		.reduce((result: number, value: number) => result * value, 1)

console.log(reduceMultiply) // 3628800 = 10!