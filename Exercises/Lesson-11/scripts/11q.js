
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

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));