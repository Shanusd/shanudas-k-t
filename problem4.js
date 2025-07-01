function totalCount(arr) {
  let result = {};

  for (let i = 1; i <= 9; i++) {
    result[i] = 0;
  }

  for (let i = 1; i <= 9; i++) {
    for (let num of arr) {
      if (num % i === 0) {
        result[i]++;
      }
    }
  }

  return result;
}

console.log(totalCount([1, 2, 8, 9]));
