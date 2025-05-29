// toggling functions
function toggleSwitch(element) {
    element.classList.toggle('active');
}

function unToggle(buttonElement) {
    const switchElement = buttonElement.nextElementSibling;
    if (switchElement && switchElement.classList.contains('toggle-switch')) {
        switchElement.classList.remove('active');
    }
}

function clearSelection() {
    document.querySelectorAll('.filter-btn').forEach(btn =>
        btn.classList.remove('selected')
    );
}

function displayAll(button) {
    clearSelection();
    button.classList.add('selected');

    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(box => box.style.display = 'flex');
}

function displayActive(button) {
    clearSelection();
    button.classList.add('selected');

    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(box => {
        const toggle = box.querySelector('.toggle-switch');
        box.style.display = toggle.classList.contains('active') ? 'flex' : 'none';
    });
}

function displayInactive(button) {
    clearSelection();
    button.classList.add('selected');

    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(box => {
        const toggle = box.querySelector('.toggle-switch');
        box.style.display = !toggle.classList.contains('active') ? 'flex' : 'none';
    });
}







// toggle dark and light mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
function toggleLightMode() {
    document.body.classList.remove('dark-mode');
}
