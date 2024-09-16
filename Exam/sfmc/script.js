const optionLetters = ["A", "B", "C", "D"];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const questionContainer = document.getElementById("questionContainer");
    const counter = document.getElementById("counter");
    shuffleArray(questions);

    let answeredQuestions = 0;
    let totalScore = 0;
    const maxScorePerQuestion = 1;

    function updateCounter() {
        counter.textContent = `${answeredQuestions} out of ${questions.length} questions answered`;
    }

    updateCounter();

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
                <span>${option}</span>`;
                label.addEventListener("click", () => {
                    errorMessage.style.display = "none";
                });
                optionsContainer.appendChild(label);
            });
        } else if (q.type === "trueFalse") {
            ["True", "False"].forEach((option, i) => {
                let label = document.createElement("label");
                label.classList.add("option-label");
                label.innerHTML = `
                <input type="radio" name="question${index}" value="${option}">
                <div class="option-prefix">${optionLetters[i]}</div>
                <span>${option}</span>`;
                label.addEventListener("click", () => {
                    errorMessage.style.display = "none";
                });
                optionsContainer.appendChild(label);
            });
        } else if (q.type === "checkboxMultipleChoice") {
            shuffleArray(q.options);
            q.options.forEach((option, i) => {
                let label = document.createElement("label");
                label.classList.add("option-label");
                label.innerHTML = `
                <input type="checkbox" name="question${index}" value="${option}">
                <div class="option-prefix">${optionLetters[i]}</div>
                <span>${option}</span>`;
                label.addEventListener("click", () => {
                    errorMessage.style.display = "none";
                });
                optionsContainer.appendChild(label);
            });
        }

        questionElement.appendChild(optionsContainer);
        questionContainer.appendChild(questionElement);
    });

    document.getElementById("quizForm").addEventListener("submit", (e) => {
        e.preventDefault();
        let allQuestionsAnswered = true;
        answeredQuestions = 0;
        totalScore = 0;

        questions.forEach((q, index) => {
            let errorMessage = document.getElementsByClassName("error-message")[index];
            let selectedOptions = Array.from(
                document.querySelectorAll(`input[name="question${index}"]:checked`)
            ).map((input) => input.value);

            let questionAnswered = selectedOptions.length > 0;

            if (!questionAnswered) {
                allQuestionsAnswered = false;
                errorMessage.style.display = "block";
            } else {
                answeredQuestions++;
                errorMessage.style.display = "none";

                if (q.type === "multipleChoice" || q.type === "trueFalse") {
                    let correct = selectedOptions[0] === q.answer;
                    totalScore += correct ? maxScorePerQuestion : 0;
                    styleOptionsAfterSubmit(index, correct, selectedOptions[0], q.answer);
                } else if (q.type === "checkboxMultipleChoice") {
                    let correct = selectedOptions.length === q.answer.length &&
                        selectedOptions.every((opt) => q.answer.includes(opt));
                    totalScore += correct ? maxScorePerQuestion : 0;
                    styleOptionsAfterSubmit(index, correct, selectedOptions, q.answer);
                }
            }
        });

        updateCounter();

        if (!allQuestionsAnswered) {
            alert("Please answer all the questions.");
        } else {
            showResult();
        }
    });

    function styleOptionsAfterSubmit(index, correct, selectedOptions, correctAnswer) {
        let labels = document.querySelectorAll(`input[name="question${index}"]+div.option-prefix`);
        labels.forEach((label) => {
            let input = label.previousSibling;
            let labelContainer = input.parentElement;
            if (correct && selectedOptions.includes(input.value)) {
                labelContainer.classList.add("correct");
            } else if (!correct && selectedOptions.includes(input.value)) {
                labelContainer.classList.add("wrong");
            }
        });
    }

    function showResult() {
        const result = document.getElementById("result");
        result.style.display = "block";
        const percentageScore = (totalScore / questions.length) * 100;

        if (percentageScore >= 50) {
            result.textContent = `Pass! Score: ${totalScore}/${questions.length}`;
            result.classList.add("pass");
        } else {
            result.textContent = `Fail! Score: ${totalScore}/${questions.length}`;
            result.classList.add("fail");
        }
    }
});
