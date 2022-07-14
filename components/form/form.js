export default function HandleInput() {
  const form = document.querySelector('[data-js="form"]');

  let newQuestionCard = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const questionInputValue = form.elements.questionText.value;
    const answerInputValue = form.elements.answerText.value;
    const tagsInputValue = form.elements.tagText.value.split(",");

    const convertedTags = tagsInputValue.map((tag) => tag.trim());

    const submitedQuestionCardValues = {
      question: questionInputValue,
      answer: answerInputValue,
      tags: convertedTags,
    };

    form.reset();
    form.elements.questionText.focus();
    newQuestionCard.push(submitedQuestionCardValues);
  });

  console.log(newQuestionCard);
}
