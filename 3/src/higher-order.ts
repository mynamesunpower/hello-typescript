const add3 = (a: number): (number) => number => (b: number): number => a + b
const result3 = add3(1)(2)
console.log(result3)