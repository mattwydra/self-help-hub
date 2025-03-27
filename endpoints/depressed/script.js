// Small Wins Tracker
const addWinBtn = document.getElementById('addWinBtn');
const newWinInput = document.getElementById('newWinInput');
const winsContainer = document.getElementById('winsContainer');
const winCounter = document.getElementById('winCounter');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');

let winCount = 0;

// Initialize existing win checkboxes
document.querySelectorAll('.win-checkbox').forEach((checkbox, index) => {
    checkbox.addEventListener('change', function () {
        const winItem = this.parentElement;
        const dateSpan = winItem.querySelector('.win-date');

        if (this.checked) {
            winItem.classList.add('completed');
            dateSpan.textContent = new Date().toLocaleDateString();
            winCount++;
        } else {
            winItem.classList.remove('completed');
            dateSpan.textContent = '';
            winCount--;
        }

        updateWinCounter();
    });
});

// Add new win
addWinBtn.addEventListener('click', () => {
    const winText = newWinInput.value.trim();
    if (winText) {
        const winId = 'win' + (document.querySelectorAll('.win-item').length + 1);
        const dateId = 'date' + (document.querySelectorAll('.win-item').length + 1);

        const winItem = document.createElement('div');
        winItem.className = 'win-item';
        winItem.innerHTML = `
            <input type="checkbox" id="${winId}" class="win-checkbox">
            <label for="${winId}">${winText}</label>
            <span class="win-date" id="${dateId}"></span>
        `;

        winsContainer.appendChild(winItem);
        newWinInput.value = '';

        // Add event listener to new checkbox
        const newCheckbox = document.getElementById(winId);
        newCheckbox.addEventListener('change', function () {
            const winItem = this.parentElement;
            const dateSpan = winItem.querySelector('.win-date');

            if (this.checked) {
                winItem.classList.add('completed');
                dateSpan.textContent = new Date().toLocaleDateString();
                winCount++;
            } else {
                winItem.classList.remove('completed');
                dateSpan.textContent = '';
                winCount--;
            }

            updateWinCounter();
        });
    }
});

function updateWinCounter() {
    winCounter.textContent = `${winCount} ${winCount === 1 ? 'win' : 'wins'}`;

    // Update progress bar - assuming 10 wins is a full bar
    const progressPercentage = Math.min(winCount * 10, 100);
    progressFill.style.width = `${progressPercentage}%`;

    // Update progress text
    if (winCount === 0) {
        progressText.textContent = "You're just getting started. Every small win matters!";
    } else if (winCount < 3) {
        progressText.textContent = "Great start! Keep collecting those wins.";
    } else if (winCount < 7) {
        progressText.textContent = "You're building momentum! How does it feel?";
    } else {
        progressText.textContent = "Impressive progress! You're proving your resilience.";
    }
}

// 5-Minute Sunlight Timer
const timerDisplay = document.getElementById('timerDisplay');
const startTimerBtn = document.getElementById('startTimer');
const resetTimerBtn = document.getElementById('resetTimer');
const timerMessage = document.getElementById('timerMessage');

let timerInterval;
let timeLeft = 300; // 5 minutes in seconds

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

startTimerBtn.addEventListener('click', () => {
    if (startTimerBtn.textContent === 'Start') {
        startTimerBtn.textContent = 'Pause';

        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = formatTime(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = 'Done!';
                startTimerBtn.textContent = 'Start';
                timerMessage.textContent = 'Well done! Even this brief exposure to light can help regulate your body clock.';
                timeLeft = 300;
            }
        }, 1000);
    } else {
        clearInterval(timerInterval);
        startTimerBtn.textContent = 'Start';
    }
});

resetTimerBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timeLeft = 300;
    timerDisplay.textContent = formatTime(timeLeft);
    startTimerBtn.textContent = 'Start';
    timerMessage.textContent = 'Natural light helps regulate your body\'s internal clock and can boost serotonin production.';
});

// "Just This" Mindfulness
const taskSelect = document.getElementById('taskSelect');
const customTask = document.getElementById('customTask');
const taskFocus = document.getElementById('taskFocus');
const taskName = document.getElementById('taskName');
const completeTaskBtn = document.getElementById('completeTask');
const completionMessage = document.getElementById('completionMessage');

taskSelect.addEventListener('change', () => {
    if (taskSelect.value === 'custom') {
        customTask.style.display = 'block';
    } else {
        customTask.style.display = 'none';
    }

    if (taskSelect.value) {
        taskFocus.style.display = 'block';

        // Set task name based on selection
        if (taskSelect.value === 'custom') {
            taskName.textContent = 'your chosen task';
        } else if (taskSelect.value === 'dish') {
            taskName.textContent = 'washing one dish';
        } else if (taskSelect.value === 'clothing') {
            taskName.textContent = 'folding one piece of clothing';
        } else if (taskSelect.value === 'surface') {
            taskName.textContent = 'wiping one surface clean';
        } else if (taskSelect.value === 'plant') {
            taskName.textContent = 'watering one plant';
        }
    } else {
        taskFocus.style.display = 'none';
    }
});

customTask.addEventListener('input', () => {
    if (customTask.value.trim()) {
        taskName.textContent = customTask.value.trim();
    } else {
        taskName.textContent = 'your chosen task';
    }
});

completeTaskBtn.addEventListener('click', () => {
    completionMessage.style.display = 'block';
    completeTaskBtn.style.display = 'none';
});