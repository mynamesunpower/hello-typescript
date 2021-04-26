const identity = <T>(n: T): T => n
console.log(
    identity<boolean>(true), // true
    identity(true), // true
    identity(4), // 4
    identity<number>(4) // 4
)