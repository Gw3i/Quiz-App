console.clear();

// Show Answer Button //
const answerButton = document.querySelector('[data-js="answer-btn"]');
const answer = document.querySelector('[data-js="answer-text"]');

console.log(answerButton);
console.log(answer);

answerButton.addEventListener("click", () => {
  console.log("Button clicked!");
  answer.classList.toggle("answer-text--hidden");
  if (answer.classList.contains("answer-text--hidden")) {
    console.log("It works!");
    answerButton.textContent = "Show answer";
  } else {
    console.log("That too!");
    answerButton.textContent = "Hide answer";
  }
});

// Fill Bookmark //

const bookmarkButton = document.querySelector('[data-js="bookmark-button"');
const bookmarkFilled = document.querySelector('[data-js="bookmark-filled"');

bookmarkButton.addEventListener("click", () => {
  console.log("Bookmark clicked!");
  bookmarkFilled.classList.toggle("bookmark-icon--active");
});
