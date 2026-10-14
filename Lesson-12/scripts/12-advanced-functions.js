/*function greeting() {
  console.log('hello');
}

greeting();

const function1 = function greeting() {
  console.log('hello2');
};

console.log(function1);
console.log(typeof function1);

const function1 = function() {
  console.log('hello2');
};

function1();

console.log(typeof function2);
function2();
function function2() {
  console.log('Hi')
};
console.log(function2.name);

// add(2, 2);
const add = function(a, b) {
  console.log(a + b);
};
add(1, 1);
console.log(add.name);


const object1 = {
  num: 2,
  fun: function() {
    console.log('hello3');
  }
};

object1.fun();

function display(param) {
  console.log(param);
}

display(2);

function run(param) {
  param();
}
run(function() {
  console.log('hello4');
});*/

/*setTimeout(function() {
  console.log('timeout');
}, 3000);

console.log('next line');

setInterval(function() {
  console.log('interval');
}, 3000);
console.log('next line 2');
[
  'make dinner',
  'wash dishes',
  'watch youtube'
].forEach((value, index) => {
  console.log(index);
  console.log(value);
});

Arrow Functions 
 
const regularFunction = function(param, param2) {
  console.log('hello');
};
regularFunction();
const arrowFunction = (param, param2) => {
  console.log('hello');
};
arrowFunction();

const oneParam = param => {
  console.log(param + 1);
};
oneParam(2);

const oneLine = () => 2 + 3;
console.log(oneLine());

const object2 = {
  method: () => {

  },
  method() {

  }
};*/

/*const buttonElement = document.querySelector('.js-button');

const eventListener = () => {
  console.log('click');
};
buttonElement.addEventListener('click', eventListener);

buttonElement.removeEventListener('click', eventListener);

buttonElement.addEventListener('click', () => {
  console.log('click2');
});*/

console.log([1, -3, 5].filter((value, index) => {
  return value >= 0;
}));


console.log([1, 1, 3].map((value, index) => {
  return value + 10;
}));

console.log([1, -3, 5].filter(value => value >= 0));


console.log([1, 1, 3].map(value => value + 10 ));