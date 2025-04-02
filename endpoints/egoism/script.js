// Toggle between sections
document.getElementById('toneDownButton').addEventListener('click', function () {
    document.getElementById('toneDownContent').style.display = 'block';
    document.getElementById('embraceContent').style.display = 'none';
});

document.getElementById('embraceButton').addEventListener('click', function () {
    document.getElementById('embraceContent').style.display = 'block';
    document.getElementById('toneDownContent').style.display = 'none';
});

// Scenario Bank for Perspective Shift Exercise
const scenarios = [
    "A colleague presents an idea in a meeting that you had mentioned to them in private last week. They receive praise for it without acknowledging your contribution.",
    "You spend hours helping a friend prepare for an important presentation. Later, they tell others how they 'did it all themselves'.",
    "You're left out of a social gathering where most of your friend group was invited.",
    "Someone criticizes your work in front of others during a team meeting.",
    "A project you led successfully gets minimal recognition, while another team's smaller achievement is celebrated extensively."
];

// Track current scenario index
let currentScenarioIndex = 0;

// New Scenario Button
document.getElementById('newScenarioBtn').addEventListener('click', function () {
    // Clear all textareas
    document.getElementById('initialReaction').value = '';
    document.getElementById('perspective1').value = '';
    document.getElementById('perspective2').value = '';
    document.getElementById('perspective3').value = '';

    // Update scenario
    currentScenarioIndex = (currentScenarioIndex + 1) % scenarios.length;
    const scenarioElement = document.querySelector('.scenario p strong');
    const newScenarioText = scenarios[currentScenarioIndex];

    // Update the scenario text (maintaining the "Scenario:" label)
    scenarioElement.nextSibling.nodeValue = " " + newScenarioText;
});

// Add Impact Entry Button
document.getElementById('addImpactEntryBtn').addEventListener('click', function () {
    const entriesContainer = document.getElementById('silentImpactEntries');
    const newEntry = document.createElement('div');
    newEntry.className = 'entry';
    newEntry.innerHTML = `
<hr style="margin: 20px 0;">
<label>Someone who helped me without seeking recognition:</label>
<input type="text" placeholder="Describe the person">

<label>What they did:</label>
<textarea placeholder="Describe what they did to help you"></textarea>

<label>How it impacted me:</label>
<textarea placeholder="Reflect on how their selfless action affected you"></textarea>

<label>What this teaches me about ego and recognition:</label>
<textarea placeholder="What can you learn from this person's approach?"></textarea>
`;
    entriesContainer.appendChild(newEntry);
});

// Add Achievement Button
document.getElementById('addAchievementBtn').addEventListener('click', function () {
    const achievementList = document.getElementById('achievementList');
    const newEntry = document.createElement('div');
    newEntry.className = 'achievement-entry';
    newEntry.innerHTML = `
<input type="text" placeholder="Enter an achievement or positive quality">
<select>
    <option value="major">Major Achievement</option>
    <option value="minor">Minor Achievement</option>
    <option value="quality">Positive Quality</option>
    <option value="skill">Valuable Skill</option>
</select>
`;
    achievementList.appendChild(newEntry);
});

// Add Boundary Context Button
document.getElementById('addBoundaryContextBtn').addEventListener('click', function () {
    const lastBoundary = document.querySelector('.boundary-visualization:last-child');
    const newBoundary = document.createElement('div');
    newBoundary.className = 'boundary-visualization';

    // Create a custom context input
    const contextInput = document.createElement('input');
    contextInput.type = 'text';
    contextInput.placeholder = 'Enter a context (e.g., "Family Gatherings")';
    contextInput.style.fontWeight = 'bold';
    contextInput.style.color = '#1976d2';
    contextInput.style.marginBottom = '10px';
    contextInput.style.width = '100%';

    newBoundary.appendChild(contextInput);

    newBoundary.innerHTML += `
<label>I need others to:</label>
<textarea placeholder="Example: Respect my opinions and preferences"></textarea>

<label>I will communicate this by:</label>
<textarea placeholder="Example: Clearly expressing my thoughts in a respectful manner"></textarea>

<label>If my boundary is crossed, I will:</label>
<textarea placeholder="Example: Politely remind them of my boundary and suggest a compromise"></textarea>
`;

    lastBoundary.after(newBoundary);
});

// Save functionality (optional - can be implemented if you want to store entries)
function saveEntries(sectionId) {
    const section = document.getElementById(sectionId);
    const entries = {};

    // Collect all input and textarea values
    section.querySelectorAll('input, textarea, select').forEach(el => {
        if (el.id) {
            entries[el.id] = el.value;
        }
    });

    // Save to localStorage
    localStorage.setItem(sectionId + 'Entries', JSON.stringify(entries));

    alert('Your entries have been saved!');
}

// Optional: Add save buttons to each exercise
// Example:
// document.querySelectorAll('.exercise').forEach(exercise => {
//     const saveBtn = document.createElement('button');
//     saveBtn.className = 'btn-primary';
//     saveBtn.style.marginLeft = '10px';
//     saveBtn.textContent = 'Save Entries';
//     saveBtn.addEventListener('click', function() {
//         saveEntries(this.closest('.content-section').id);
//     });
//     exercise.appendChild(saveBtn);
// });