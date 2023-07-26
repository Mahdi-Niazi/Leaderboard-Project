import {
  form, user, score, apiURL,
} from './variable.js';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  async function addData() {
    const add = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
        score,
      }),
    });
    return add.json();
  }
  addData().then((cheeseData) => {
    if (cheeseData) {
      const successAlert = `<div class="alert alert-success" role="alert">
            Score Added successfully! Please click on Refresh 
            </div>`;
      document
        .querySelector('.score-box')
        .insertAdjacentHTML('afterbegin', successAlert);
    } else {
      const warningAlert = `<div class="alert alert-warning" role="alert">
                Something went wrong!
                </div>`;
      document
        .querySelector('.score-box')
        .insertAdjacentHTML('afterbegin', warningAlert);
    }
  });
});
