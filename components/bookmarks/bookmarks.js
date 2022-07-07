export default function Bookmark() {
  const answerButton = document.querySelector('[data-js="answer-btn"]');
  const answer = document.querySelector('[data-js="answer-container"]');

  const bookmarkButton = document.querySelector('[data-js="bookmark-button"');
  const bookmarkFilled = document.querySelector('[data-js="bookmark-filled"');

  bookmarkButton.addEventListener("click", () => {
    console.log("Bookmark clicked!");
    bookmarkFilled.classList.toggle("bookmark-icon--active");
  });
}
