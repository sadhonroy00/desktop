// script.js
function openApp(appName) {
    alert(`You opened ${appName}`);
}

function openStartMenu() {
    const startMenu = document.getElementById('startMenu');
    if (startMenu.style.display === 'none' || startMenu.style.display === '') {
        startMenu.style.display = 'flex';
    } else {
        startMenu.style.display = 'none';
    }
}

// Close the start menu when clicking outside of it
document.addEventListener('click', function(event) {
    const startMenu = document.getElementById('startMenu');
    const startButton = document.querySelector('.start-button');
    if (event.target !== startButton && !startButton.contains(event.target)) {
        startMenu.style.display = 'none';
    }
});
