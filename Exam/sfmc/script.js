// Import all the different types of questions
// Assuming you have included multipleChoice.js, trueFalse.js, and checkboxMultipleChoice.js in your HTML
const questions = [
    ...multipleChoiceQuestions,
    ...trueFalseQuestions,
    ...checkboxMultipleChoiceQuestions
];

const optionLetters = ["A", "B", "C", "D"];

// Function to shuffle options for randomness
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to update the counter in real-time
function updateLiveCounter() {
    let answeredCount = 0;
    document.querySelectorAll(".question").forEach((questionElement) => {
        const selectedInputs = questionElement.querySelectorAll("input:checked");
        if (selectedInputs.length > 0) {
            answeredCount++;
        }
    });
    document.getElementById("counter").textContent = `${answeredCount} out of ${questions.length} questions answered`;
}

document.addEventListener("DOMContentLoaded", () => {
    const questionContainer = document.getElementById("questionContainer");
    const counter = document.getElementById("counter");
    shuffleArray(questions);

    let totalScore = 0;
    const maxScorePerQuestion = 1;

    // Initialize live counter
    updateLiveCounter();

    questions.forEach((q, index) => {
        let questionElement = document.createElement("div");
        questionElement.classList.add("question");

        let errorMessage = document.createElement("div");
        errorMessage.classList.add("error-message");
        errorMessage.textContent = "Please answer this question";

        let questionText = document.createElement("p");
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionElement.appendChild(questionText);
        questionElement.appendChild(errorMessage);

        let optionsContainer = document.createElement("div");
        optionsContainer.classList.add("options");

        if (q.type === "multipleChoice") {
            shuffleArray(q.options);
            q.options.forEach((option, i) => {
                let label = document.createElement("label");
                label.classList.add("option-label");
                label.innerHTML = `
                    <input type="radio" name="question${index}" value="${option}">
                    <div class="option-prefix">${optionLetters[i]}</div>
                    <span>${option}</span>
                `;
                label.addEventListener("click", function () {
                    optionsContainer.querySelectorAll(".option-label").forEach(lbl => lbl.classList.remove("selected"));
                    label.classList.add("selected");
                    updateLiveCounter(); // Update counter when an option is selected
                });
                optionsContainer.appendChild(label);
            });
        } else if (q.type === "trueFalse") {
            let trueLabel = document.createElement("label");
            trueLabel.classList.add("option-label");
            trueLabel.innerHTML = `
                <input type="radio" name="question${index}" value="True">
                <div class="option-prefix">T</div>
                <span>True</span>
            `;
            trueLabel.addEventListener("click", function () {
                optionsContainer.querySelectorAll(".option-label").forEach(lbl => lbl.classList.remove("selected"));
                trueLabel.classList.add("selected");
                updateLiveCounter(); // Update counter when an option is selected
            });
            optionsContainer.appendChild(trueLabel);

            let falseLabel = document.createElement("label");
            falseLabel.classList.add("option-label");
            falseLabel.innerHTML = `
                <input type="radio" name="question${index}" value="False">
                <div class="option-prefix">F</div>
                <span>False</span>
            `;
            falseLabel.addEventListener("click", function () {
                optionsContainer.querySelectorAll(".option-label").forEach(lbl => lbl.classList.remove("selected"));
                falseLabel.classList.add("selected");
                updateLiveCounter(); // Update counter when an option is selected
            });
            optionsContainer.appendChild(falseLabel);
        } else if (q.type === "checkboxMultipleChoice") {
            shuffleArray(q.options);
            q.options.forEach((option, i) => {
                let label = document.createElement("label");
                label.classList.add("option-label");
                label.innerHTML = `
                    <input type="checkbox" name="question${index}" value="${option}">
                    <div class="option-prefix">${optionLetters[i]}</div>
                    <span>${option}</span>
                `;
                label.addEventListener("change", function () {
                    if (label.querySelector("input").checked) {
                        label.classList.add("selected");
                    } else {
                        label.classList.remove("selected");
                    }
                    updateLiveCounter(); // Update counter when a checkbox is checked or unchecked
                });
                optionsContainer.appendChild(label);
            });
        }

        questionElement.appendChild(optionsContainer);
        questionContainer.appendChild(questionElement);
    });

    document.getElementById("quizForm").addEventListener("submit", (e) => {
        e.preventDefault();
        let answeredQuestions = 0;
        totalScore = 0;
        const resultElement = document.getElementById("result");
        resultElement.style.display = "none";

        let allQuestionsAnswered = true;
        questions.forEach((q, index) => {
            const questionElement = questionContainer.children[index];
            const errorMessage = questionElement.querySelector(".error-message");
            const selectedInputs = questionElement.querySelectorAll("input:checked");
            const optionLabels = questionElement.querySelectorAll(".option-label");

            if (selectedInputs.length === 0) {
                errorMessage.style.display = "block";
                questionElement.classList.add("question-unanswered");
                allQuestionsAnswered = false;
            } else {
                errorMessage.style.display = "none";
                questionElement.classList.remove("question-unanswered");
                answeredQuestions++;
                let selectedValues = Array.from(selectedInputs).map(input => input.value);
                let isCorrect = false;

                if (q.type === "multipleChoice" || q.type === "trueFalse") {
                    isCorrect = selectedValues[0] === q.answer;
                } else if (q.type === "checkboxMultipleChoice") {
                    isCorrect = selectedValues.length === q.answer.length && selectedValues.every(v => q.answer.includes(v));
                }

                optionLabels.forEach((label) => {
                    const input = label.querySelector("input");
                    if (q.answer.includes(input.value)) {
                        label.classList.add("correct");
                    } else if (input.checked) {
                        label.classList.add("wrong");
                    }
                });

                if (isCorrect) {
                    totalScore += maxScorePerQuestion;
                }
            }
        });

        updateLiveCounter(); // Final counter update on form submission

        if (!allQuestionsAnswered) {
            alert("Please answer all questions.");
            return;
        }

        resultElement.style.display = "block";
        if (totalScore >= (questions.length / 2)) {
            resultElement.classList.remove("fail");
            resultElement.classList.add("pass");
            resultElement.textContent = `Pass! Score: ${totalScore}/${questions.length}`;
        } else {
            resultElement.classList.remove("pass");
            resultElement.classList.add("fail");
            resultElement.textContent = `Fail! Score: ${totalScore}/${questions.length}`;
        }
    });
});
