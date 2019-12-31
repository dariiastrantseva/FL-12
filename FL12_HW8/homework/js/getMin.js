function getMin() {

    let min = Infinity;

    for (let i in arguments) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;

}

console.log(getMin(3, 0, -3));