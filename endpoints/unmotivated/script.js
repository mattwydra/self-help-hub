const questions = [
    "If I had to bet on myself, what are the odds that I’d succeed? What would I need to change to make those odds 100%?",
    "What’s a moment in my past that I never want to forget? Why was it so impactful?",
    "What do I want out of life? What am I willing to sacrifice in its pursuit?"
];
let currentQuestion = 0;
let responses = [];

function loadQuestion() {
    document.getElementById("question").textContent = questions[currentQuestion];
    document.getElementById("progress").textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById("answer").value = responses[currentQuestion] || "";
}

function nextQuestion() {
    responses[currentQuestion] = document.getElementById("answer").value;
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showSummary();
    }
}

function showSummary() {
    let container = document.getElementById("question-container");
    container.innerHTML = "<h2>Your Responses</h2>";
    questions.forEach((q, index) => {
        container.innerHTML += `<p><strong>${q}</strong></p><p>${responses[index]}</p>`;
    });
    let downloadBtn = document.createElement("button");
    downloadBtn.textContent = "Download Responses";
    downloadBtn.onclick = downloadResponses;
    container.appendChild(downloadBtn);
}

function downloadResponses() {
    let text = questions.map((q, i) => `${q}\n${responses[i]}\n`).join("\n");
    let blob = new Blob([text], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "responses.txt";
    link.click();
}

loadQuestion();