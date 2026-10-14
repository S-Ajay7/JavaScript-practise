      /*const score = {
        wins: 0,
        losses: 0,
        ties: 0
      };*/

      let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

      /*if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        }
      }*/

      // console.log(JSON.parse(localStorage.getItem('score')));

      updateScoreElement();

      let isAutoPlaying = false;
      let intervalId;

      const autoPlayButton = document.querySelector('.auto-play-button');

      autoPlayButton.addEventListener('click', autoPlay);

      const resetButton = document.querySelector('.reset-score-button');
      resetButton.addEventListener('click', () => {
        resetMessage();
      });

      function resetMessage() {
        const resetMessageField = document.querySelector('.js-result-message');
        resetMessageField.innerHTML = `Are you want to reset the score? 
        <button class='js-reset-button-yes message-buttons'>Yes</button>
        <button class='js-reset-button-no message-buttons'>No</button>`;

        document.querySelector('.js-reset-button-yes')
        .addEventListener('click', () => {
          resetScore();
          hideResetConfirmation();
        });

        document.querySelector('.js-reset-button-no')
        .addEventListener('click', () => {
          hideResetConfirmation();
        });
      }

      function hideResetConfirmation() {
        document.querySelector('.js-result-message')
          .innerHTML = '';
      }

      function autoPlay() {
        if (!isAutoPlaying) {
          intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
          }, 1000);
          isAutoPlaying = true;
          autoPlayButton.innerHTML = 'Stop Play';
        } else {
          clearInterval(intervalId);
          isAutoPlaying = false;
          autoPlayButton.innerHTML = 'Auto Play';
        }
      }

      document.querySelector('.js-rock-button')
        .addEventListener('click', () => {
          playGame('rock');
        });

      document.querySelector('.js-paper-button')
        .addEventListener('click', () => {
          playGame('paper');
        });

      document.querySelector('.js-scissors-button')
        .addEventListener('click', () => {
          playGame('scissors');
        });


      document.body.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
          playGame('rock');
        } else if (event.key === 'p') {
          playGame('paper');
        } else if (event.key === 's') {
          playGame('scissors');
        } else if (event.key === 'a') {
          autoPlay();
        } else if (event.key === 'Backspace') {
          resetMessage();
        }
      });

      function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
      };
      
      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (computerMove === playerMove) {
          result = 'Tie';
        } else if (playerMove === 'rock') {
          if (computerMove === 'scissors') {
            result = 'You win';
          } else if (computerMove === 'paper') {
            result = 'You lose';
          }
        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win';
          } else if (computerMove === 'scissors'){
            result = 'You lose'; 
          }
        } else if (playerMove === 'scissors') {
          if (computerMove === 'paper') {
            result = 'You win';
          } else if (computerMove === 'rock') {
            result = 'You lose';
          }
        }

        if (result === 'You win') {
          score.wins++; 
        } else if (result === 'You lose') {
          score.losses++;
        } else if (result === 'Tie') {
          score.ties++;
        }

        localStorage.setItem('message', 'Hello');
        localStorage.setItem('name', 'testName');

        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('.js-result')
          .innerHTML = `${result}.`;
        document.querySelector('.js-moves')
          .innerHTML = `You
      <img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${computerMove}-emoji.png" class="move-icon">
      Computer`;

        updateScoreElement();

        /*alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
        Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);*/
      }

      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = '';
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }
        return computerMove;
      }