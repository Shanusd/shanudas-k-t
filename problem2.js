function numberSeries(a) {
  let result = [];
  let num = 1;
  for(let i=1; i<=a; i++) {
    result = [...result, num];
    num = num + 2;
  }   
  return result; 
}
console.log(numberSeries(6));