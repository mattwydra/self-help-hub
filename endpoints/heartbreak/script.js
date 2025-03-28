// Canvas functionality
const canvas = document.getElementById('futureCanvas');
const ctx = canvas.getContext('2d');
const addItemBtn = document.getElementById('addItem');
const clearCanvasBtn = document.getElementById('clearCanvas');
const imageOptions = document.getElementById('imageOptions');
const promptContainer = document.getElementById('promptContainer');

let isPlacing = false;
let placingSymbol = '';

// Initialize canvas
function initCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial';
    ctx.fillStyle = '#aaa';
    ctx.textAlign = 'center';
    ctx.fillText('Your Future Awaits...', canvas.width / 2, canvas.height / 2);
}

initCanvas();

// Event listeners
addItemBtn.addEventListener('click', () => {
    if (!isPlacing) {
        isPlacing = true;
        imageOptions.style.display = 'flex';
        promptContainer.innerHTML = '<p class="prompt">Select a symbol that represents something you want in your future.</p>';
    } else {
        isPlacing = false;
        imageOptions.style.display = 'none';
        promptContainer.innerHTML = '<p class="prompt">Click "Add to Your Future" to continue building your vision.</p>';
    }
});

clearCanvasBtn.addEventListener('click', () => {
    initCanvas();
});

// Image option selection
document.querySelectorAll('.image-option').forEach(option => {
    option.addEventListener('click', () => {
        placingSymbol = option.dataset.symbol;
        imageOptions.style.display = 'none';
        promptContainer.innerHTML = '<p class="prompt">Click anywhere on the canvas to place this symbol. Then add a brief note about what it represents.</p>';
    });
});

// Canvas click to place symbol
canvas.addEventListener('click', (e) => {
    if (isPlacing && placingSymbol) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.font = '30px Arial';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.fillText(placingSymbol, x, y);

        const text = prompt("What does this represent in your future?", "");
        if (text) {
            ctx.font = '14px Arial';
            ctx.fillText(text, x, y + 30);
        }

        isPlacing = false;
        placingSymbol = '';
        promptContainer.innerHTML = '<p class="prompt">Click "Add to Your Future" to continue building your vision.</p>';
    }
});

// Identity reclamation functionality
const saveIdentityBtn = document.getElementById('saveIdentity');
const identityText = document.getElementById('identityText');
const itemsList = document.getElementById('itemsList');

saveIdentityBtn.addEventListener('click', () => {
    const text = identityText.value.trim();
    if (text) {
        const item = document.createElement('div');
        item.className = 'saved-item';
        item.innerHTML = `
            <p>${text}</p>
            <button class="small-action">Commit to This Week</button>
        `;
        itemsList.appendChild(item);
        identityText.value = '';

        // Add event listener to the commit button
        item.querySelector('.small-action').addEventListener('click', function () {
            this.textContent = "I'm doing this!";
            this.style.backgroundColor = "#9b59b6";
            this.style.color = "white";
            item.style.borderLeft = "4px solid #9b59b6";
        });
    }
});