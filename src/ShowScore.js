import { showData, table, apiURL } from './variable.js';

showData.addEventListener('click', (e) => {
  e.preventDefault();

  table.innerHTML = '';
  async function showScore() {
    const show = await fetch(apiURL);
    return show.json();
  }
  showScore().then((data) => {
    data.result.forEach((user) => {
      const markup = `<tr> <td> ${user.user} : ${user.score}</td></tr> `;
      table.innerHTML += markup;
    });
  });
});
