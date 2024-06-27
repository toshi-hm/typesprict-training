type Rectangle = {width: number, height: number}
type Square = {size: number}
type Circle = {radius: number}

function areaRectangle(r: Rectangle): number {
    return r.width * r.height
}
function areaSquare(s: Square): number {
    return s.size **2
}
function areaCircle(c: Circle): number {
    return Math.PI * c.radius ** 2
}

function area(obj: Rectangle | Square | Circle): number {
    if ("width" in obj) {
        return areaRectangle(obj)
    } else if ("size" in obj) {
        return areaSquare(obj)
    } else if ("radius" in obj) {
        return areaCircle(obj)
    } else {
        return 0
    }
}

console.log(area({width: 1, height: 2}))
console.log(area({size: 2}))
console.log(area({radius: 2}))
