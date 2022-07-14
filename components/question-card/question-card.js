export default function QuestionCard() {
  const cardList = document.querySelectorAll('[data-js="card"]');

  let isShown = false;

  cardList.forEach(card => {
    const button = card.querySelector('[data-js="answer-btn"]');
    const answerText = card.querySelector('[data-js="answer-container"]');

    button.addEventListener('click', () => {
      isShown = !isShown;
      if (isShown) {
        button.innerText = 'Hide answer';
      } else {
        button.innerText = 'Show answer';
      }

      answerText.classList.toggle('answer-container--hidden');
    });
  });
}
