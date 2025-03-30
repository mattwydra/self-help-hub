function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(function (content) {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Add active class to the clicked tab
    event.target.classList.add('active');
}

function showBoundaryWorksheet() {
    alert("Boundary worksheet would open here in the actual application");
}

function animateProgress() {
    const progressBar = document.getElementById('lifeProgress');
    progressBar.style.width = '25%';
    document.querySelector('.progress-text').innerText = 'Current challenges = ~25% of your life journey';
}