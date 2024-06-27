function fizzBuzz(i: number): string {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            return "fizzBuzz"
        }
        return "fizz"
    } else if (i % 5 === 0) {
        return "buzz"
    }
    return i.toString()
}

for (const i of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) {
    console.log(fizzBuzz(i))
}
