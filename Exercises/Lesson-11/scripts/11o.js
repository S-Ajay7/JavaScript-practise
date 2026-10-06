const arr = ['hello', 'world', 'search', 'good'];

function helper(arr) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'search') {
      result = i;
      break;
    }
  }
  return result;
}

function repeatedString(arr) {
  let result = -1;
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = i;
    } else {
      result = obj[arr[i]];
      break;
    }
  }
  return result;
}

console.log(helper(['hello', 'world', 'search', 'good']));
console.log(helper(['not', 'found']));

console.log(repeatedString(['hello', 'world', 'search', 'good', 'search']));
console.log(repeatedString(['hi', 'hello', 'hello', 'world', 'search', 'good', 'search']));