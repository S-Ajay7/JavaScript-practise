
function removeEgg(foods) {
  foods.reverse();
  const result = [];
  let eggs = 0;
  for (let i = 0; i < foods.length; i++) {
    if (eggs < 2 && foods[i] === 'egg') {
      eggs++;
      continue;
    }
    result.push(foods[i]);
  }
  return result.reverse();;
}

function removeEgg1(foods) {
  foods = foods.slice().reverse();
  const result = [];
  let eggs = 0;
  for (let i = 0; i < foods.length; i++) {
    if (eggs < 2 && foods[i] === 'egg') {
      eggs++;
      continue;
    }
    result.push(foods[i]);
  }
  return result.reverse();;
}

const arr = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(arr));
console.log(arr);

const arr1 = ['egg', 'apple', 'egg', 'egg', 'ham'];console.log(removeEgg1(arr1));
console.log(arr1);