function numberSeries(a) {
  let result = [];
  let num = 1;
  if (a % 2 === 0) {
    count = a - 1;
  } else {
    count = a;
  }
  for (let i = 1; i <= count; i++) {
    result = [...result, num];
    num = num + 2;
  }
  return result;
}
console.log(numberSeries(6));
