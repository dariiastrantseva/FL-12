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
console.log(makeNumber('erer384jjjfd123'));
console.log(makeNumber('123098h76gfdd'));
console.log(makeNumber('ijifjgdj'));