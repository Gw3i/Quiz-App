// Show Answer Button //
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

// Fill Bookmark //

const bookmarkButton = document.querySelector('[data-js="bookmark-button"');
const bookmarkFilled = document.querySelector('[data-js="bookmark-filled"');

bookmarkButton.addEventListener("click", () => {
  console.log("Bookmark clicked!");
  bookmarkFilled.classList.toggle("bookmark-icon--active");
});
