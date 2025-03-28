// Track current step
let currentProgress = 0;
const totalSteps = 6;

// Function to move to next step
function nextStep(current, next) {
    // Validate current step if needed
    if (current === 2 && document.getElementById('failure-description').value.trim() === '') {
        alert('Please describe a failure experience before continuing.');
        return;
    }

    // Hide current step
    document.getElementById('step' + current).classList.add('hidden');

    // Show next step
    document.getElementById('step' + next).classList.remove('hidden');

    // Update progress
    currentProgress = (next - 1) / totalSteps * 100;
    document.getElementById('progress-bar').style.width = currentProgress + '%';
    document.getElementById('progress-bar').innerText = Math.round(currentProgress) + '%';

    // Scroll to top of new section
    window.scrollTo(0, 0);
}

// Function to add another entry to failure portfolio
function addPortfolioEntry() {
    const portfolioEntries = document.getElementById('portfolio-entries');
    const entryCount = portfolioEntries.getElementsByClassName('portfolio-item').length + 1;

    const newEntry = document.createElement('div');
    newEntry.className = 'portfolio-item';
    newEntry.innerHTML = `
        <div>
            <label for="failure${entryCount}">Failure Experience #${entryCount}:</label>
            <input type="text" id="failure${entryCount}" placeholder="Brief description of the failure">
        </div>
        <div>
            <label for="growth${entryCount}">The Growth It Provided:</label>
            <textarea id="growth${entryCount}" placeholder="How did this failure help you grow?"></textarea>
        </div>
    `;

    portfolioEntries.appendChild(newEntry);
}

// Function to reset the activity
function resetActivity() {
    for (let i = 2; i <= 7; i++) {
        document.getElementById('step' + i).classList.add('hidden');
    }
    document.getElementById('step1').classList.remove('hidden');

    // Clear form inputs
    const textInputs = document.querySelectorAll('input[type="text"], textarea');
    textInputs.forEach(input => {
        input.value = '';
    });

    // Reset radio buttons
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => {
        input.checked = false;
    });

    // Reset progress bar
    currentProgress = 0;
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('progress-bar').innerText = '0%';

    // Reset portfolio entries
    const portfolioEntries = document.getElementById('portfolio-entries');
    const firstEntry = portfolioEntries.firstElementChild;
    portfolioEntries.innerHTML = '';
    portfolioEntries.appendChild(firstEntry);

    // Scroll back to top
    window.scrollTo(0, 0);
}