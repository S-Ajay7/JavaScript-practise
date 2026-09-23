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