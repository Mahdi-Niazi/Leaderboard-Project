async function showScore() {
  const show = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OF05SZzD4WoEnigb5GUR/scores',
  );
  return show.json();
}
showScore().then((data) => {
  data.result.forEach((user) => {
    const markup = `<tr> <td> ${user.user} : ${user.score}</td></tr> `;
    document.querySelector('.tbody').insertAdjacentHTML('beforeend', markup);
  });
});
