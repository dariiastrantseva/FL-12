function countNumbers(line){
  let numbers = makeNumber(line);
  let result = {};
  for(let i=0; i<numbers.length; i++){
    if (numbers[i] in result){
      result[numbers[i]] = result[numbers[i]] + 1;
    } else {
      result[numbers[i]] = 1;
    }
  }
  return result;
}

function makeNumber(line){
 let elements = line.split('');
  let result = [];
  for(let i in elements){
    if(!isNaN(elements[i])) {
      result.push(elements[i]);
    }
  }
  return result.join('');
}

console.log(countNumbers('erer384jj4444666888jfd123'));
console.log(countNumbers('jdjjka000466588kkkfs662555'));
