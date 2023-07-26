const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RLqIb5mtyWrtoLAgkj34/scores';

const showData = document.querySelector('#showData');
const table = document.querySelector('.tbody');

const form = document.getElementById('score-form');

export {
  apiURL, showData, table, form,
};
