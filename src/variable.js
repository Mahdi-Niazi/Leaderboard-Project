const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OF05SZzD4WoEnigb5GUR/scores';

const showData = document.querySelector('#showData');
const table = document.querySelector('.tbody');

const form = document.getElementById('score-form');

const user = document.getElementById('name').value;
const score = document.getElementById('score').value;

export {
  apiURL, showData, table, form, user, score,
};
