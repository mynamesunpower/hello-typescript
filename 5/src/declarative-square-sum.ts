import {range} from './utils/range'
import {map} from './utils/map'
import {fold} from './utils/fold'

let numbers: number[] = range(1, 100 + 1)
console.log(map(numbers, value => value * value))
let result = fold(map(numbers, value => value * value), (result, value) => result + value, 0)

console.log(result)