export type NumberToNumberFunc = (a: number) => number

const test: NumberToNumberFunc = (a) => a * 3


const rang: NumberToNumberFunc = a => a + 10

export const sunny = (a: number): NumberToNumberFunc => {
    const _sunny: NumberToNumberFunc = (b: number): number => {
        return a + b
    } // const _sunny = b => a + b
    return _sunny // const sunny = a => (b => a + b)
}

const cheetah = (a: number): NumberToNumberFunc => {
    return (b: number): number => a + b
}
const zz = (a: number): (number) => number => (b: number): number => a + b


