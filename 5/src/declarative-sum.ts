import {range} from './utils/range'
import {fold} from './utils/fold'

// 입력 데이터 생성
let numbers: number[] = range(1, 100 + 1)

// 입력 데이터 가공
let result = fold(numbers, (result, value) => result + value, 0)

console.log(result)