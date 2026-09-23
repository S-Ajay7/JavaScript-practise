function helper(button_class) {
        const button = document.querySelector(`.${button_class}`);
        if (button.classList.contains('is-toggled')) {
          button.classList.remove('is-toggled');
        } else {
          button.classList.add('is-toggled');
        }
      }