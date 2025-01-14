function checkAnswer() {

   // Correct Answer
const correctAnswer = "4";

// Get User's Answer
const userAnswer = document.querySelector('input[name="quiz"]:checked');

// Comparison Logic
if (userAnswer) {
    if (userAnswer.value === correctAnswer) {
        // Correct answer
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        // Incorrect answer
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
} else {
    // No answer selected
    document.getElementById("feedback").textContent = "Please select an answer.";
}



document.getElementById("submit-answer").addEventListener("click", checkAnswer);
