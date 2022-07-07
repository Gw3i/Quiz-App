export default function Bookmark() {
  const bookmarkButton = document.querySelector('[data-js="bookmark-button"');
  const bookmarkFilled = document.querySelector('[data-js="bookmark-filled"');

  bookmarkButton.addEventListener("click", () => {
    bookmarkFilled.classList.toggle("bookmark-icon--active");
  });
}
