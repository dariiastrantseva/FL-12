function isLeapYear() {
    let input = new Date(arguments[0]);
    let year = input.getFullYear();
    if (isNaN(year)) {
        return ('Invalid Date');
    } else if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
        return (`${year} is a leap year`);
    } else {
        return (`${year} is not a leap year`);
    }
}

console.log(isLeapYear('2020-01-01 00:00:00'));
console.log(isLeapYear('2020-01-01 00:00:00777'));
console.log(isLeapYear('2021-01-15 13:00:00'));
console.log(isLeapYear('2200-01-15 13:00:00'));
console.log(isLeapYear(1213131313135465656654564646542132132131));
console.log(isLeapYear(1213131313));