//1
function convert(...input) {
    let res = [];
    for (let i = 0; i < input.length; i++) {

        if (input[i] === +input[i]) {
            res.push(input[i] += '');
        } else {
            res.push(+input[i]);
        }
    }
    return res;
}
console.log(convert('1', 2, 3, '4'));
//2
function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

executeforEach([1, 2, 3],
    function(el) {
        console.log(el * 2)
    });
//3
function mapArray(arr, func) {
    let res = [];
    executeforEach(arr, el => res.push(func(+el)));
    return res;
}
console.log(mapArray([2, '5', 8], function(el) {
    return el + 3
}));
//4
function filterArray(arr, filter) {
    let res = [];
    executeforEach(arr, el => filter(el) ? res.push(el) : 0);
    return res;
}

console.log(filterArray([2, 5, 8], function(el) {
    return el % 2 === 0
}));
//5
function flipOver(str) {
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) {
        res += str.charAt(i);
    }
    return res;
}
console.log(flipOver('hey world'));
//6
function makeListFromRange(range) {
    let arr = [];
    for (let i = range[0]; i <= range[1]; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(makeListFromRange([2, 7]));
//7
function getArrayOfKeys(arr, key) {
    let res = [];
    executeforEach(arr, object => res.push(object[key]));
    return res;
}

const actors=[
  {name:'tommy',age:36},
  {name:'lee',age:28}
];
console.log(getArrayOfKeys(actors,'name'));
//8
function substitute(arr) {
    const number = 30;
    return mapArray(arr, el => el < number ? '*' : el);
}

console.log(substitute([58, 14, 48, 2, 31, 29]));
//9
function getPastDay(date, dayBef) {
    const day = 1000*60*60*24;
    return new Date(date.getTime() - dayBef * day).getDate();
}

const date = new Date(2019, 0, 2);
console.log(getPastDay(date, 1));
console.log(getPastDay(date, 2));
console.log(getPastDay(date, 365));
//10
function formatDate(date) {
   return date.toLocaleString();
}

console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date()));
