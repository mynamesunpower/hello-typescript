export const pureDelete = 
<T>(array: readonly T[], 
    callback: (value: T, index?: number) => boolean): 
    T[] => array.filter(
        (value, index) => callback(value, index) == false)