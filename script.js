const topics = [
    "Anger", "Heartbreak", "Love", "Parents", "Unmotivated", "Depressed",
    "Egoism", "Strength", "Lost", "Overthinking", "Loneliness", "Regret",
    "Failure", "Social Anxiety", "Boredom", "Gratitude", "Revenge", "Anxiety"
];

const container = document.getElementById("buttonContainer");
const radius = 350; // Radius for the circular layout
const centerX = 150;
const centerY = 150;

topics.forEach((topic, index) => {
    const angle = (index / topics.length) * (2 * Math.PI);
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    const button = document.createElement("button");
    button.innerText = topic;
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.onclick = () => alert(`Redirecting to ${topic} page...`);
    container.appendChild(button);
});