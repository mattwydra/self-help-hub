const breathingCircle = document.getElementById('breathingCircle');
const breathingInstructions = document.getElementById('breathingInstructions');
let isBreathingActive = false;
let breathingPhase = 0;
let intervalId;

breathingCircle.addEventListener('click', () => {
    if (isBreathingActive) {
        clearInterval(intervalId);
        breathingCircle.textContent = 'Breathe';
        breathingCircle.className = 'circle';
        breathingInstructions.textContent = 'Click the circle to begin';
        isBreathingActive = false;
    } else {
        startBreathing();
    }
});

function startBreathing() {
    isBreathingActive = true;
    breathingPhase = 0;
    updateBreathingUI();

    intervalId = setInterval(() => {
        breathingPhase = (breathingPhase + 1) % 3;
        updateBreathingUI();
    }, [4000, 7000, 8000][breathingPhase]);
}

function updateBreathingUI() {
    breathingCircle.className = 'circle';

    switch (breathingPhase) {
        case 0:
            breathingCircle.textContent = 'Inhale';
            breathingCircle.classList.add('inhale');
            breathingInstructions.textContent = 'Inhale for 4 seconds';
            setTimeout(() => {
                breathingPhase = (breathingPhase + 1) % 3;
                updateBreathingUI();
            }, 4000);
            break;
        case 1:
            breathingCircle.textContent = 'Hold';
            breathingCircle.classList.add('hold');
            breathingInstructions.textContent = 'Hold for 7 seconds';
            setTimeout(() => {
                breathingPhase = (breathingPhase + 1) % 3;
                updateBreathingUI();
            }, 7000);
            break;
        case 2:
            breathingCircle.textContent = 'Exhale';
            breathingCircle.classList.add('exhale');
            breathingInstructions.textContent = 'Exhale for 8 seconds';
            setTimeout(() => {
                breathingPhase = (breathingPhase + 1) % 3;
                updateBreathingUI();
            }, 8000);
            break;
    }
}