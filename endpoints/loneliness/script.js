// Nature Bridge Visualization
const startNatureBridge = document.getElementById('startNatureBridge');
const natureBridgeContent = document.getElementById('natureBridgeContent');
const progress1 = document.getElementById('progress1');

startNatureBridge.addEventListener('click', () => {
    natureBridgeContent.style.display = 'block';
    startNatureBridge.style.display = 'none';

    // Animate the first progress bar
    setTimeout(() => {
        progress1.style.width = '100%';
    }, 100);
});

// Future Letter
const saveLetter = document.getElementById('saveLetter');
const letterSaved = document.getElementById('letterSaved');

saveLetter.addEventListener('click', () => {
    const letterContent = document.getElementById('futureLetter').value;
    if (letterContent.trim() !== '') {
        // In a real app, you would save this to local storage or a database
        localStorage.setItem('futureLetter', letterContent);
        letterSaved.style.display = 'block';
        setTimeout(() => {
            letterSaved.style.display = 'none';
        }, 3000);
    }
});

// Check if there's a saved letter
window.addEventListener('DOMContentLoaded', () => {
    const savedLetter = localStorage.getItem('futureLetter');
    if (savedLetter) {
        document.getElementById('futureLetter').value = savedLetter;
    }
});

// Micro-Connection Challenge
document.querySelectorAll('.challenge-item input').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            this.parentElement.style.backgroundColor = '#e8f4f1';
            this.parentElement.style.borderLeft = '4px solid #2a9d8f';
        } else {
            this.parentElement.style.backgroundColor = 'white';
            this.parentElement.style.borderLeft = 'none';
        }
    });
});

// Load saved challenge states
window.addEventListener('DOMContentLoaded', () => {
    for (let i = 1; i <= 5; i++) {
        const saved = localStorage.getItem(`challenge${i}`);
        if (saved === 'true') {
            const checkbox = document.getElementById(`challenge${i}`);
            checkbox.checked = true;
            checkbox.parentElement.style.backgroundColor = '#e8f4f1';
            checkbox.parentElement.style.borderLeft = '4px solid #2a9d8f';
        }
    }
});

// Save challenge states when changed
document.querySelectorAll('.challenge-item input').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        localStorage.setItem(this.id, this.checked);
    });
});

// Future Vision Timeline
document.querySelectorAll('.milestone').forEach(milestone => {
    milestone.addEventListener('click', function () {
        // Hide all milestone content first
        document.querySelectorAll('.milestone-content').forEach(content => {
            content.style.display = 'none';
        });

        // Show the clicked milestone's content
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).style.display = 'block';

        // Scroll to the content
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});

// Save timeline reflections
const saveTimeline = document.getElementById('saveTimeline');
const timelineSaved = document.getElementById('timelineSaved');

saveTimeline.addEventListener('click', () => {
    // Save all milestone reflections
    document.querySelectorAll('.milestone-content textarea').forEach(textarea => {
        if (textarea.value.trim() !== '') {
            localStorage.setItem(textarea.parentElement.id + '-reflection', textarea.value);
        }
    });

    timelineSaved.style.display = 'block';
    setTimeout(() => {
        timelineSaved.style.display = 'none';
    }, 3000);
});

// Load saved timeline reflections
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.milestone-content textarea').forEach(textarea => {
        const saved = localStorage.getItem(textarea.parentElement.id + '-reflection');
        if (saved) {
            textarea.value = saved;
        }
    });
});

// Gratitude Practice
const saveGratitude = document.getElementById('saveGratitude');
const gratitudeSaved = document.getElementById('gratitudeSaved');

saveGratitude.addEventListener('click', () => {
    const date = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

    // Save gratitude items with date
    for (let i = 1; i <= 3; i++) {
        const content = document.getElementById(`gratitude${i}`).value;
        if (content.trim() !== '') {
            localStorage.setItem(`gratitude${i}-${date}`, content);
        }
    }

    // Save connection reflection
    const connection = document.getElementById('gratitudeConnection').value;
    if (connection.trim() !== '') {
        localStorage.setItem(`gratitudeConnection-${date}`, connection);
    }

    gratitudeSaved.style.display = 'block';
    setTimeout(() => {
        gratitudeSaved.style.display = 'none';
    }, 3000);
});

// Show the first milestone content by default
document.getElementById('milestone1').style.display = 'block';