export default function Bookmark() {
  const cardList = document.querySelectorAll('[data-js="card"');

  cardList.forEach(card => {
    const bookmarkButton = card.querySelector('[data-js="bookmark-button"]');
    const bookmarkFilled = card.querySelector('[data-js="bookmark-filled"]');

    bookmarkButton.addEventListener('click', () => {
      bookmarkFilled.classList.toggle('icon--active');
    });
  });
}
