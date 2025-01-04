document.addEventListener("DOMContentLoaded", () => {
  let questions = [];
  let currentQuestionIndex = 0;
  let score = 0;

  const questionText = document.querySelector("#question-text");
  const choices = document.querySelectorAll(".choice");

  // Load questions from JSON file
  function loadQuestions() {
    fetch("questions.json")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load questions: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        questions = data;
        if (questions.length === 0) {
          throw new Error("No questions found in JSON file.");
        }
        loadQuestion(currentQuestionIndex);
      })
      .catch(error => {
        console.error("Error loading questions:", error);
        questionText.setAttribute("value", "Failed to load questions.");
      });
  }

  function loadQuestion(index) {
    if (index >= questions.length) {
      // Navigate to index.html with score
      window.location.href = `score.html?score=${score}`;
      return;
    }

    const question = questions[index];
    questionText.setAttribute("value", question.question);
    choices.forEach((choice, i) => {
      choice.setAttribute("value", question.choices[i] || ""); // Handle missing choices
    });
  }

  choices.forEach(choice => {
    choice.addEventListener("click", () => {
      const selectedChoice = parseInt(choice.getAttribute("data-choice"));
      const correctChoice = questions[currentQuestionIndex].correct;

      if (selectedChoice === correctChoice) {
        score++;
      }

      currentQuestionIndex++;
      loadQuestion(currentQuestionIndex);
    });
  });

  loadQuestions(); // Start by loading the questions
});
