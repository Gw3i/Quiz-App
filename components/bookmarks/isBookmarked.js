export default function IsBookmarked() {
  const bookmarkPage = document.querySelector('[data-js="bookmark-page"]');
  const isBookmarked = questionCards.filter((questionCard) => {
    if (bookmarkFilled.classList.contains("icon--active")) {
      bookmarkPage.append(questionCard);
    }
  });
  console.log(isBookmarked)
}
