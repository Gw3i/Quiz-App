import Bookmark from "../bookmarks/bookmarks.js";
import QuestionCard from "../question-card/question-card.js";

const bookmark = Bookmark();
const showAnswer = QuestionCard();

const questionCards = [
  {
    titel: "Question:",
    bookmark: bookmark,
    question: "What kind of animal is a Dolphin?",
    answerButton: showAnswer,
    answer: "Dolphins are mammals, not fish",
    tags: ["animals", "sea", "fish", "biology", "sealife"],
  },
  {
    titel: "Question:",
    bookmark: bookmark,
    question: "What is the capitol of Japan?",
    answerButton: showAnswer,
    answer: "Tokyo",
    tags: ["cities", "geography", "japan", "asia"],
  },
];
