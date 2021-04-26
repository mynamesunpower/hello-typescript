type ResultType = [boolean, string]

export const doSomething = (): ResultType => {
    try {
        throw new Error('Some error occurs...')
    } catch (e) {
        return [false, e.message]
    }
}