let calculation = localStorage.getItem('calculation') || '';

      function helper() {
        const result = document.querySelector('.js-result');
        result.innerHTML = calculation;
      }

      helper();

      function updateCalculation(parameter) {
        if (parameter === '=') {
          calculation = eval(calculation);
        } else {
          calculation += parameter;
        }
        console.log(calculation);

        localStorage.setItem('calculation', calculation);
        helper();
        // console.log(typeof calculation);
      }