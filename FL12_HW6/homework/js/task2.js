let a = parseInt(prompt('Side a:'))
let b = parseInt(prompt('Side b:'))
let c = parseInt(prompt('Side c:'))

if (isNaN(a) || isNaN(b) || isNaN(c) || a === '' || b === '' || c === '') {
    console.log('input values should be ONLY numbers')
}
if (a <= 0 || b <= 0 || c <= 0) {
    console.log('A triangle must have 3 sides with a positive definite length')
} else {
    if (a + b <= c || a + c <= b || c + b <= a) {
        console.log('Triangle doesn’t exist')
    } else {
        if (a === b && b === c || c === a && c === b) {
            console.log('Equilateral triangle')
        } else {
            if (a === b || b === c || c === a) {
                console.log('Isosceles triangle')
            } else {
                console.log('Scalene triangle')
            }
        }
    }
}