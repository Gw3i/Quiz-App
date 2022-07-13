export default function Create() {
  let questionCards = [];

  // // Create card
  const main = document.querySelector('[data-js="content"]');

  function iterateThroughCards() {
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

      // Show / Hide function
      let isShown = false;

      answerButton.addEventListener("click", () => {
        isShown = !isShown;
        if (isShown) {
          answerButton.innerText = "Hide answer";
        } else {
          answerButton.innerText = "Show answer";
        }

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
      tagList.classList.add("tag-list");
      const tagsListButtons = document.createElement("button");

      // Tag list
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
      console.log(questionCard);
      questionCard.tags.forEach((tag) => {
        const tagItem = document.createElement("li");
        tagList.append(tagItem);
        tagItem.innerText = tag;
        tagItem.classList.add("tag");
      });

      main.append(card);
      card.append(
        headline,
        bookmark,
        questionText,
        answerButtonContainer,
        answerContainer,
        tagList
      );
      bookmark.append(bookmarkUnfilled, bookmarkFilled);
      answerButtonContainer.append(answerButton);
      answerContainer.append(answerIcon, answerText);
      tagList.append(tagsListButtons);
    });
  }

  // Get questions out of API
  function getQuestions(questionObject) {
    // Mapen questionCards weil ein array erstellt wird den wir dann benutzen 
    questionCards = questionObject.map((questionData) => {
      return {
        question: questionData.question,
        answer: questionData.correct_answer,
        tags: [questionData.category, questionData.difficulty],
      };
    });
  }
  // Fetch api
  async function fetchQuestions() {
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=10");
      const questionData = await response.json();
      getQuestions(questionData.results);
      // Weil ascynchron, daher function zu card erstellen hier rein
      iterateThroughCards();
      console.log(questionData);
    } catch (error) {
      console.error(error.message);
    }
  }

  fetchQuestions();
}
