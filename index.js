let numbers = [1, 3, 4, 5, 6, 7];

function filterArray(numbers, callback) {
  return callback(numbers);
}
let results = [];
function checkcallback() {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      console.log(numbers[i]);
      results.push(true);
    } else {
      results.push(false);
    }
  }
  return results;
}
let filterArray1 = filterArray(numbers, checkcallback);
console.log(filterArray1);
