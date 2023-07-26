const form = document.getElementById('score-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;

  async function addData() {
    const add = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OF05SZzD4WoEnigb5GUR/scores',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user,
          score,
        }),
      },
    );
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
