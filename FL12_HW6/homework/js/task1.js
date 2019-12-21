const n2 = 2;
const n4 = 4;
let a = prompt('Number a:')
let b = prompt('Number b:')
let c = prompt('Number c:')
if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
    console.log('Invalid input data')
}
let D = b * b - n4 * a * c;
if (D < 0) {
    console.log('no solution')
} else if (D === 0) {
    let x = -b / n2 * a;
    console.log('x =', Math.round(x))
} else {
    let x1 = (-b + Math.sqrt(D)) / n2 * a;
    console.log('x1 =', Math.round(x1))
    let x2 = (-b - Math.sqrt(D)) / n2 * a;
    console.log('x2 =', Math.round(x2))
}