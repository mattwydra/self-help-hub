const angerContent = document.getElementById("anger-content");
const angerStrategies = {
    "summon": `
        <h2>How to Channel Your Anger Effectively</h2>
        <p>Understand that anger signals something is wrong and needs attention...</p>
        <ul>
            <li>Identify what triggered your anger.</li>
            <li>Recognize emotions underneath—frustration, sadness, fear.</li>
            <li>Use controlled visualization techniques.</li>
        </ul>
    `,
    "use": `
        <h2>Turn Anger Into Action</h2>
        <p>Use your anger productively instead of letting it consume you...</p>
        <ul>
            <li>Physical Outlet: Work out, shadowbox, or sprint.</li>
            <li>Creative Outlet: Write, draw, or express it through art.</li>
            <li>Task Focus: Apply your anger towards a goal.</li>
        </ul>
    `,
    "calm": `
        <h2>Practice Controlled Release</h2>
        <p>Instead of suppressing anger, release it constructively...</p>
        <ul>
            <li>Breathe deeply and count backward from 10.</li>
            <li>Find small physical outlets—clench fists, pace, or do push-ups.</li>
            <li>Journal your triggers and revisit them for deeper understanding.</li>
        </ul>
    `
};

function loadAngerMode(method) {
    if (angerStrategies[method]) {
        angerContent.innerHTML = angerStrategies[method];
        angerContent.style.display = "block";
    }
}

function resetMode() {
    angerContent.innerHTML = "";
    angerContent.style.display = "none";
}