export default function Bookmark() {
  const cardList = document.querySelectorAll('[data-js="card"');
  console.log(cardList);

  cardList.forEach((card) => {
    const bookmarkButton = card.querySelector('[data-js="bookmark-button"]');
    const bookmarkFilled = card.querySelector('[data-js="bookmark-filled"]');

    bookmarkButton.addEventListener("click", () => {
      bookmarkFilled.classList.toggle("bookmark-icon--active");
    });

    console.log(bookmarkButton);
    console.log(bookmarkFilled);
  });
}
