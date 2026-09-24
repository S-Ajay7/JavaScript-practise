function helper(button_class) {
        const button = document.querySelector(`.${button_class}`);
        if (button_class === 'js-button1') {
          document.querySelector('.js-button2').classList.remove('is-toggled');
          document.querySelector('.js-button3').classList.remove('is-toggled');
        } else if (button_class === 'js-button2') {
          document.querySelector('.js-button1').classList.remove('is-toggled');
          document.querySelector('.js-button3').classList.remove('is-toggled');
        } else if (button_class === 'js-button3') {
          document.querySelector('.js-button1').classList.remove('is-toggled');
          document.querySelector('.js-button2').classList.remove('is-toggled');
        }
        button.classList.add('is-toggled');
      }