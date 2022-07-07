export default function QuestionCrad() {
  const answerButton = document.querySelector('[data-js="answer-btn"]');
  const answer = document.querySelector('[data-js="answer-container"]');

  let isShown = false;

  answerButton.addEventListener("click", () => {
    isShown = !isShown;
    if (isShown) {
      answerButton.innerText = "Hide answer";
    } else {
      answerButton.innerText = "Show answer";
    }

    answer.classList.toggle("answer-container--hidden");
  });
}
