let answerButton = document.querySelector('[data-js="answer-btn"]');

let answer = document.querySelector('[data-js="answer-text"]');
console.log(answerButton);
console.log(answer);

function showAnswer() {
  console.log("Button clicked!");
  answer.classList.toggle("answer-text--hidden");
}

answerButton.addEventListener('click', showAnswer);
