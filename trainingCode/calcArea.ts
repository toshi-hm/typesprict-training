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

