
function findIndex(array, word) {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      result = i;
      break;
    }
  }
  return result;
}

function unique(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (findIndex(result, arr[i]) == -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'blue', 'blue', 'red']));