let responses = [];

function submitAnswers() {
    const textareas = document.querySelectorAll("textarea");
    responses = Array.from(textareas).map(textarea => textarea.value);
    document.getElementById("journalForm").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("story").textContent = "[Generated Future Story Based on Responses]";
}

function showEditOptions() {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("editOptions").classList.remove("hidden");
    let editableContainer = document.getElementById("editableQuestions");
    editableContainer.innerHTML = "";

    responses.forEach((response, index) => {
        let div = document.createElement("div");
        div.innerHTML = `<strong>Q${index + 1}:</strong> <textarea>${response}</textarea>`;
        editableContainer.appendChild(div);
    });
}

function resubmitEdits() {
    const editedTextareas = document.querySelectorAll("#editableQuestions textarea");
    responses = Array.from(editedTextareas).map(textarea => textarea.value);

    // Update the original form's textareas so future edits persist
    const originalTextareas = document.querySelectorAll("#journalForm textarea");
    responses.forEach((response, index) => {
        originalTextareas[index].value = response;
    });

    document.getElementById("editOptions").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("story").textContent = "[Updated Future Story Based on Responses]";
}


function getStepsToFuture() {
    alert("[Generated Steps to Reach Your Future]");
}

function restartProcess() {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("journalForm").classList.remove("hidden");
}