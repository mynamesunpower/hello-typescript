import {mergeArray} from './utils/mergeArray'

const mergedArray1: string[] = mergeArray(
    ['Hello'], ['World']
)
console.log(mergedArray1)

const mergedArray2: number[] = mergeArray(
    [1], [2, 3], [4, 5, 6], [7, 8, 9, 10]
)
console.log(mergedArray2)