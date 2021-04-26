import {range} from './utils/range'

let names: string[] = range(1, 5 + 1)
    .map((value, index) => `[${index}]: ${value}`)

console.log(names)

// [ '[0]: 1', '[1]: 2', '[2]: 3', '[3]: 4', '[4]: 5' ]