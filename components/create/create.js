export default function Create() {
  const questionCards = [
    {
      question: "What kind of animal is a Dolphin?",
      answer: "Dolphins are mammals, not fish.",
      tags: ["animals", "sea", "fish", "biology", "sealife"],
    },
    {
      question: "What is the largest building in the world?",
      answer: "Burj Khalifa in Dubia. 828m",
      tags: ["architecture", "buildungs", "skyscrapper", "history", "mankind"],
    },
    {
      question: "What is the capitol of France?",
      answer: "Paris",
      tags: ["geography", "europe", "france", "baguette", "croissants"],
    },
    {
      question: "What is the capitol of Japan?",
      answer: "Tokyo",
      tags: ["cities", "geography", "japan", "asia"],
    },
  ];

  const main = document.querySelector('[data-js="content"]');
  //   const headline = document.querySelector('[data-js="card__healine"]');

  questionCards.forEach((questionCard) => {
    const card = document.createElement("article");
    card.classList.add("card");

    const headline = document.createElement("h2");
    headline.classList.add("card__headline");
    headline.innerText = "Question";

    // Bookmark button
    const bookmark = document.createElement("button");
    bookmark.addEventListener("click", () => {
      bookmarkFilled.classList.toggle("icon--active");
    });

    const bookmarkFilled = document.createElement("img");
    bookmarkFilled.src = "/images/bookmark-filled.svg";
    bookmarkFilled.classList.add("bookmark-icon", "icon", "icon--active");

    const bookmarkUnfilled = document.createElement("img");
    bookmarkUnfilled.src = "/images/bookmark.svg";
    bookmarkUnfilled.classList.add("bookmark-icon", "icon");

    // Question text
    const questionText = questionCard.question;

    // Answer button
    const answerButtonContainer = document.createElement("div");
    answerButtonContainer.classList.add("card__btn__section");
    const answerButton = document.createElement("button");
    answerButton.classList.add("btn", "btn--shadow");
    answerButton.innerText = "Show answer";
    answerButton.addEventListener("click", () => {
      answerContainer.classList.toggle("answer-container--hidden");
    });

    // Answer container
    const answerContainer = document.createElement("div");
    answerContainer.classList.add(
      "answer-container",
      "answer-container--hidden"
    );
    const answerIcon = document.createElement("img");
    answerIcon.src = "/images/info.svg";
    const answerText = questionCard.answer;

    const tagList = document.createElement("ul");
    const tagsListButtons = document.createElement("button");
    // tagsListButtons.innerText = questionCard.tags;
    // tagsListButtons.classList.add("tag");

    // const tags = questionCard.tags;
    // tags.forEach((tag) => {
    //   const tagItemList = document.createElement("li");
    //   tagItemList.innerText = tags;
    // });

    main.append(card);
    card.append(
      headline,
      questionText,
      answerButtonContainer,
      answerContainer,
      tagList,
      bookmark
    );
    answerContainer.append(answerIcon, answerText);
    answerButtonContainer.append(answerButton);
    tagList.append(tagsListButtons);
    bookmark.append(bookmarkUnfilled, bookmarkFilled);
  });
}
