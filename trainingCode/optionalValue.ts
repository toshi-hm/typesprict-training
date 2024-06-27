interface Person {
    firstName: string
    lastName: string
    middleName?: string
}

const p1: Person = {firstName: "太郎", lastName: "佐藤", middleName: "ダニエル"}
const p2: Person = {firstName: "太郎", lastName: "田中"}

function buildName(firstName: string, lastName: string, middleName?: string): string {
    if (middleName) {
        return `${firstName} ${middleName} ${lastName}`
    }
    return `${firstName} ${lastName}`
}
const name1: string = buildName(p1.firstName, p1.lastName, p1.middleName)
const name2: string = buildName(p2.firstName, p2.lastName)

console.log(name1)
console.log(name2)
