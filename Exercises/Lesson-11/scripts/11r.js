
function removeEgg(foods) {
  const result = [];
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {
      continue;
    }
    result.push(foods[i]);
  }
  return result;
}

function removeEgg1(foods) {
  const result = [];
  let eggs = 0;
  for (let i = 0; i < foods.length; i++) {
    if (eggs < 2 && foods[i] === 'egg') {
      eggs++;
      continue;
    }
    result.push(foods[i]);
  }
  return result;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
console.log(removeEgg1(['egg', 'apple', 'egg', 'egg', 'ham']));