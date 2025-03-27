// Curiosity Roulette
const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');
const result = document.getElementById('result');
const resultDescription = document.getElementById('resultDescription');

// Wheel content
const wheelItems = [
    {
        title: "Nature Mystery",
        description: "Research why flamingos are pink. What in their diet causes this coloration, and are any other animals colored by their food?",
        color: "#9c27b0"
    },
    {
        title: "Language Snack",
        description: "Learn how to say 'I'm curious about your culture' in a language you don't speak. Practice pronouncing it correctly.",
        color: "#673ab7"
    },
    {
        title: "Science Wonder",
        description: "Find out why the sky is blue during the day but red/orange at sunset. What causes this dramatic color change?",
        color: "#3f51b5"
    },
    {
        title: "Historic Moment",
        description: "Research an event that happened exactly 100 years ago today. How does it connect to our present world?",
        color: "#2196f3"
    },
    {
        title: "Skill Sample",
        description: "Watch a 5-minute tutorial on a skill you've never tried before, like origami, speed reading, or basic card tricks.",
        color: "#009688"
    },
    {
        title: "Thought Experiment",
        description: "If you could instantly master any musical instrument, which would you choose and why? What would be the first song you'd learn?",
        color: "#4caf50"
    },
    {
        title: "Cultural Dive",
        description: "Find a traditional folk tale from a culture you're not familiar with. What values or lessons does it teach?",
        color: "#8bc34a"
    },
    {
        title: "Math Puzzle",
        description: "Research the Monty Hall Problem. Understanding this probability puzzle might surprise you!",
        color: "#cddc39"
    }
];

// Create wheel sections
let rotationAngle = 0;
const sectionAngle = 360 / wheelItems.length;

wheelItems.forEach((item, index) => {
    const section = document.createElement('div');
    section.className = 'wheel-section';
    section.style.backgroundColor = item.color;
    section.style.transform = `rotate(${rotationAngle}deg)`;

    const title = document.createElement('div');
    title.className = 'section-title';
    title.textContent = item.title;
    section.appendChild(title);

    wheel.appendChild(section);
    rotationAngle += sectionAngle;
});

// Spin functionality
let spinning = false;
let currentRotation = 0;

spinButton.addEventListener('click', () => {
    if (spinning) return;

    spinning = true;
    spinButton.disabled = true;
    result.style.display = 'none';

    // Random rotation between 2 and 5 full spins plus a random section
    const spins = 2 + Math.random() * 3;
    const randomSectionAngle = Math.floor(Math.random() * wheelItems.length) * sectionAngle;
    const totalRotation = 360 * spins + randomSectionAngle;

    // Apply rotation
    currentRotation += totalRotation;
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    // After animation completes
    setTimeout(() => {
        // Determine the winning section
        const normalizedRotation = (currentRotation % 360 + 360) % 360;
        const winningIndex = Math.floor((360 - (normalizedRotation % 360)) / sectionAngle) % wheelItems.length;
        const winningItem = wheelItems[winningIndex];

        // Display result
        resultDescription.textContent = winningItem.description;
        result.style.display = 'block';

        spinning = false;
        spinButton.disabled = false;
    }, 3000); // Match this to the CSS transition time
});

// Timer functionality for creative challenges
function createTimer(timerElement, buttonElement) {
    let timeLeft = 300; // 5 minutes in seconds
    let timerInterval;
    let running = false;

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    buttonElement.addEventListener('click', () => {
        if (running) {
            // Stop the timer
            clearInterval(timerInterval);
            buttonElement.textContent = 'Start Timer';
            running = false;
            timeLeft = 300; // Reset to 5 minutes
            updateDisplay();
        } else {
            // Start the timer
            running = true;
            buttonElement.textContent = 'Reset Timer';

            timerInterval = setInterval(() => {
                timeLeft--;
                updateDisplay();

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    buttonElement.textContent = 'Start Timer';
                    running = false;

                    // Alert when time is up
                    alert('Time\'s up! How did your creative challenge go?');

                    timeLeft = 300; // Reset to 5 minutes
                    updateDisplay();
                }
            }, 1000);
        }
    });
}

// Initialize all timers
createTimer(
    document.getElementById('storyTimer'),
    document.getElementById('startStoryTimer')
);

createTimer(
    document.getElementById('designTimer'),
    document.getElementById('startDesignTimer')
);

createTimer(
    document.getElementById('observationTimer'),
    document.getElementById('startObservationTimer')
);