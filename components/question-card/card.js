import Bookmark from "../bookmarks/bookmarks.js";
import QuestionCard from "../question-card/question-card.js";

const bookmark = Bookmark();
const showAnswer = QuestionCard();

const questionCards = [
  {
    question: "What kind of animal is a Dolphin?",
    answer: "Dolphins are mammals, not fish",
    tags: ["animals", "sea", "fish", "biology", "sealife"],
  },
  {
    question: "What is the capitol of Japan?",
    answer: "Tokyo",
    tags: ["cities", "geography", "japan", "asia"],
  },
  {
    question: "What is the biggest building in the world?",
    answer: "Warisan Merdeka Tower Skyscraper in Kuala Lumpur, Malaysia - 679m",
    tags: ["cities", "geography", "japan", "asia"],
  },
];

questionCards.forEach((card) => {
  // get card container
  const cardContainer = document.querySelector('[data-js="card"]');
  document.body.append(cardContainer);
  // get question text and change question
  const questionText = document.querySelector(
    '[data-js="card__question-text"]'
  );
  questionText.innerText = card.question;

  // get answer
  const answer = document.querySelector('[data-js="answer-text"]');
  answer.innerText = card.answer;

  // get tags // just first tag is selected
  const tagList = document.querySelector('[data-js="tag-list"]');
  const tagListTag = document.querySelectorAll('[data-js="tag"]');
  tagListTag.innerText = card.tags;
  console.log(typeof tagList);
});

console.log(questionCards.length);
