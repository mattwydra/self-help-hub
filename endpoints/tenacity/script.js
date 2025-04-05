// Function to update the AMCC level based on checked items
function updateAMCC() {
    const checkboxes = document.querySelectorAll('.checkbox');
    const progressBar = document.getElementById('progressBar');
    const amccLevel = document.getElementById('amccLevel');

    let checked = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.classList.contains('checked')) {
            checked++;
        }
    });

    const percentage = Math.round((checked / checkboxes.length) * 100);
    progressBar.style.width = percentage + '%';
    amccLevel.textContent = percentage + '%';

    if (percentage === 100) {
        alert("Congratulations! You've completed all the AMCC development challenges. Remember that consistent practice over time is key to lasting neural changes.");
    }
}

// Info tooltips
const infoIcons = document.querySelectorAll('.info-icon');
infoIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        const tooltip = this.nextElementSibling;
        tooltip.style.visibility = tooltip.style.visibility === 'visible' ? 'hidden' : 'visible';
        tooltip.style.opacity = tooltip.style.opacity === '1' ? '0' : '1';
    });
});