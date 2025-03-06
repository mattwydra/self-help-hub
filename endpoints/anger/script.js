const content = document.getElementById("content");
const angerStrategies = {
    "channel": `
            <h2>How to Channel Your Anger Effectively</h2>
            <p>Understand that anger signals something is wrong and needs attention...</p>
            <ul>
                <li>Identify what triggered your anger.</li>
                <li>Recognize emotions underneath—frustration, sadness, fear.</li>
                <li>Use controlled visualization techniques.</li>
            </ul>
        `,
    "action": `
            <h2>Turn Anger Into Action</h2>
            <p>Use your anger productively instead of letting it consume you...</p>
            <ul>
                <li>Physical Outlet: Work out, shadowbox, or sprint.</li>
                <li>Creative Outlet: Write, draw, or express it through art.</li>
                <li>Task Focus: Apply your anger towards a goal.</li>
            </ul>
        `,
    "control": `
            <h2>Practice Controlled Release</h2>
            <p>Instead of suppressing anger, release it constructively...</p>
            <ul>
                <li>Breathe deeply and count backward from 10.</li>
                <li>Find small physical outlets—clench fists, pace, or do push-ups.</li>
                <li>Journal your triggers and revisit them for deeper understanding.</li>
            </ul>
        `
};

document.querySelectorAll(".anger-btn").forEach(button => {
    button.addEventListener("click", function () {
        const strategy = this.getAttribute("data-strategy");
        content.innerHTML = angerStrategies[strategy];
        content.style.display = "block"; // Show content
    });
});

function loadAngerMode(method){
    angerStrategies.forEach (element => {
        if (element === method){
            
        }
    });
}
array.forEach(element => {
  console.log(element);
});