let MAX_AGE = 100

export default function makeRandomNumber(max: number = MAX_AGE): number {
    return Math.ceil((Math.random() * max))
}
