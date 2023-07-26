import './style.css';
import './addGame.js';
import './addScore.js';
import './ShowScore.js';

const refresh = document.querySelector('.refresh-btn');

refresh.addEventListener('click', () => {
  window.location.reload();
});
