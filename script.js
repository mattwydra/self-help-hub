const topics = [
    "Anger", "Heartbreak", "Love", "Parents", "Unmotivated", "Depressed", "Meditation",
    "Egoism", "Strength", "Lost", "Overthinking", "Loneliness", "Regret", "Goal Setting",
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

    // Counteract the rotation effect
    button.style.transform = `translate(-50%, -50%) rotate(${angle + 90}rad)`;

    button.onclick = () => {
        const directoryName = topic.toLowerCase().replace(/\s+/g, "_"); // Convert to lowercase and replace spaces with dashes
        window.location.href = `endpoints/${directoryName}/index.html`;
        // window.location.href = `https://mattwydra.github.io/self-help-hub/${directoryName}/index.html`;
    };

    container.appendChild(button);
});
