// Toggle sub-goals visibility
function toggleSubGoals(button) {
    const goalItem = button.closest('.goal-item');
    const goalTree = goalItem.querySelector('.goal-tree');

    if (goalTree.style.display === 'block') {
        goalTree.style.display = 'none';
        button.textContent = 'Expand';
    } else {
        goalTree.style.display = 'block';
        button.textContent = 'Collapse';
    }
}

// Remove a goal
function removeGoal(button) {
    if (confirm('Are you sure you want to remove this goal?')) {
        const goalItem = button.closest('.goal-item');
        goalItem.remove();
    }
}

// Add 3-year goal
document.getElementById('addThreeYearGoal').addEventListener('click', function () {
    const threeYearGoals = document.getElementById('threeYearGoals');
    const goalCount = threeYearGoals.children.length + 1;

    const newGoal = document.createElement('div');
    newGoal.className = 'goal-item';
    newGoal.innerHTML = `
        <div class="goal-header">
            <div class="goal-title">3-Year Goal #${goalCount}</div>
            <div>
                <button class="expand-btn" onclick="toggleSubGoals(this)">Expand</button>
                <button class="remove-btn" onclick="removeGoal(this)">Remove</button>
            </div>
        </div>
        <input type="text" placeholder="Enter your 3-year goal here" class="goal-input">
        <textarea placeholder="Why is this goal important to you? What would achieving it mean?"></textarea>
        
        <div class="goal-tree">
            <div class="sub-goals yearly-goals">
                <h3>1-Year Milestones</h3>
                <p>Break down your 3-year goal into yearly achievements:</p>
                
                <div class="goal-item">
                    <div class="goal-header">
                        <div class="goal-title">Year 1</div>
                        <div>
                            <button class="expand-btn" onclick="toggleSubGoals(this)">Expand</button>
                            <button class="remove-btn" onclick="removeGoal(this)">Remove</button>
                        </div>
                    </div>
                    <input type="text" placeholder="What should you accomplish in the first year?">
                    
                    <div class="goal-tree">
                        <div class="sub-goals quarterly-goals">
                            <h4>Quarterly Goals</h4>
                            
                            <div class="goal-item">
                                <div class="goal-header">
                                    <div class="goal-title">Q1</div>
                                    <div>
                                        <button class="expand-btn" onclick="toggleSubGoals(this)">Expand</button>
                                        <button class="remove-btn" onclick="removeGoal(this)">Remove</button>
                                    </div>
                                </div>
                                <input type="text" placeholder="What will you accomplish in the first quarter?">
                                
                                <div class="goal-tree">
                                    <div class="sub-goals monthly-goals">
                                        <h5>Monthly Goals</h5>
                                        
                                        <div class="goal-item">
                                            <div class="goal-header">
                                                <div class="goal-title">Month 1</div>
                                                <button class="remove-btn" onclick="removeGoal(this)">Remove</button>
                                            </div>
                                            <input type="text" placeholder="What will you accomplish in the first month?">
                                            <textarea placeholder="What weekly/daily actions will you take to achieve this?"></textarea>
                                        </div>
                                        
                                        <button onclick="addMonthlyGoal(this)">+ Add Another Month</button>
                                    </div>
                                </div>
                            </div>
                            
                            <button onclick="addQuarterlyGoal(this)">+ Add Another Quarter</button>
                        </div>
                    </div>
                </div>
                
                <button onclick="addYearlyGoal(this)">+ Add Another Year</button>
            </div>
        </div>
    `;

    threeYearGoals.appendChild(newGoal);
});

// Add yearly goal
function addYearlyGoal(button) {
    const yearlyGoals = button.closest('.yearly-goals');
    const goalItems = yearlyGoals.querySelectorAll('.goal-item');
    const yearCount = goalItems.length + 1;

    const newGoal = document.createElement('div');
    newGoal.className = 'goal-item';
    newGoal.innerHTML = `
        <div class="goal-header">
            <div class="goal-title">Year ${yearCount}</div>
            <div>
                <button class="expand-btn" onclick="toggleSubGoals(this)">Expand</button>
                <button class="remove-btn" onclick="removeGoal(this)">Remove</button>
            </div>
        </div>
        <input type="text" placeholder="What should you accomplish in year ${yearCount}?">
        
        <div class="goal-tree">
            <div class="sub-goals quarterly-goals">
                <h4>Quarterly Goals</h4>
                
                <div class="goal-item">
                    <div class="goal-header">
                        <div class="goal-title">Q1</div>
                        <div>
                            <button class="expand-btn" onclick="toggleSubGoals(this)">Expand</button>
                            <button class="remove-btn" onclick="removeGoal(this)">Remove</button>
                        </div>
                    </div>
                    <input type="text" placeholder="What will you accomplish in the first quarter?">
                    
                    <div class="goal-tree">
                        <div class="sub-goals monthly-goals">
                            <h5>Monthly Goals</h5>
                            
                            <div class="goal-item">
                                <div class="goal-header">
                                    <div class="goal-title">Month 1</div>
                                    <button class="remove-btn" onclick="removeGoal(this)">Remove</button>
                                </div>
                                <input type="text" placeholder="What will you accomplish in the first month?">
                                <textarea placeholder="What weekly/daily actions will you take to achieve this?"></textarea>
                            </div>
                            
                            <button onclick="addMonthlyGoal(this)">+ Add Another Month</button>
                        </div>
                    </div>
                </div>
                
                <button onclick="addQuarterlyGoal(this)">+ Add Another Quarter</button>
            </div>
        </div>
    `;

    button.before(newGoal);
}

// Add quarterly goal
function addQuarterlyGoal(button) {
    const quarterlyGoals = button.closest('.quarterly-goals');
    const goalItems = quarterlyGoals.querySelectorAll('.goal-item');
    const quarterCount = goalItems.length + 1;

    const newGoal = document.createElement('div');
    newGoal.className = 'goal-item';
    newGoal.innerHTML = `
        <div class="goal-header">
            <div class="goal-title">Q${quarterCount}</div>
            <div>
                <button class="expand-btn" onclick="toggleSubGoals(this)">Expand</button>
                <button class="remove-btn" onclick="removeGoal(this)">Remove</button>
            </div>
        </div>
        <input type="text" placeholder="What will you accomplish in quarter ${quarterCount}?">
        
        <div class="goal-tree">
            <div class="sub-goals monthly-goals">
                <h5>Monthly Goals</h5>
                
                <div class="goal-item">
                    <div class="goal-header">
                        <div class="goal-title">Month 1</div>
                        <button class="remove-btn" onclick="removeGoal(this)">Remove</button>
                    </div>
                    <input type="text" placeholder="What will you accomplish in the first month?">
                    <textarea placeholder="What weekly/daily actions will you take to achieve this?"></textarea>
                </div>
                
                <button onclick="addMonthlyGoal(this)">+ Add Another Month</button>
            </div>
        </div>
    `;

    button.before(newGoal);
}

// Add monthly goal
function addMonthlyGoal(button) {
    const monthlyGoals = button.closest('.monthly-goals');
    const goalItems = monthlyGoals.querySelectorAll('.goal-item');
    const monthCount = goalItems.length + 1;

    const newGoal = document.createElement('div');
    newGoal.className = 'goal-item';
    newGoal.innerHTML = `
        <div class="goal-header">
            <div class="goal-title">Month ${monthCount}</div>
            <button class="remove-btn" onclick="removeGoal(this)">Remove</button>
        </div>
        <input type="text" placeholder="What will you accomplish in month ${monthCount}?">
        <textarea placeholder="What weekly/daily actions will you take to achieve this?"></textarea>
    `;

    button.before(newGoal);
}

// Help modal functionality
const modal = document.getElementById('helpModal');
const helpLink = document.getElementById('helpLink');
const closeBtn = document.querySelector('.close');

helpLink.onclick = function (e) {
    e.preventDefault();
    modal.style.display = 'block';
}

closeBtn.onclick = function () {
    modal.style.display = 'none';
}

function closeHelpModal() {
    modal.style.display = 'none';
}

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

// Save goals functionality
document.getElementById('saveBtn').addEventListener('click', function () {
    alert('In a real implementation, this would save your goals to local storage or a database. For now, consider taking a screenshot or printing your goals.');
});

// Print goals
document.getElementById('printBtn').addEventListener('click', function () {
    // Expand all goal trees for printing
    const goalTrees = document.querySelectorAll('.goal-tree');
    goalTrees.forEach(tree => {
        tree.style.display = 'block';
    });

    window.print();
});