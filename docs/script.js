
const API_URL = "http://localhost:3000/feedback";

const feedbackForm = document.querySelector("#feedbackForm");
const nameInput = document.querySelector("#studentName");
const courseInput = document.querySelector("#course");
const ratingInput = document.querySelector("#rating");
const commentsInput = document.querySelector("#feedback");
const statusMessage = document.querySelector("#statusMessage");

feedbackForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const feedbackData = {
        name: nameInput.value.trim(),
        course: courseInput.value.trim(),
        rating: Number(ratingInput.value),
        comments: commentsInput.value.trim()
    };

    statusMessage.textContent = "Submitting feedback...";

    const submitButton = feedbackForm.querySelector(
        'button[type="submit"]'
    );
    submitButton.disabled = true;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(feedbackData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Could not submit feedback.");
        }

        statusMessage.textContent = "Feedback submitted successfully!";
        feedbackForm.reset();

    } catch (error) {
        statusMessage.textContent = error.message;
        console.error("Submission error:", error);

    } finally {
        submitButton.disabled = false;
    }
});
