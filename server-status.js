// JavaScript to Fetch Minecraft Server Status
const apiUrl = 'https://api.mcsrvstat.us/2/185.172.57.189:25566';  // Replace with your Minecraft server IP

async function fetchServerStatus() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Update the players online count
        document.getElementById('players-online').textContent = data.players.online || 0;

        // Update the list of online players
        const playerList = document.getElementById('player-list');
        playerList.innerHTML = '';  // Clear any existing list items
        if (data.players.list && data.players.list.length > 0) {
            data.players.list.forEach(player => {
                const li = document.createElement('li');
                li.textContent = player;
                playerList.appendChild(li);
            });
        } else {
            playerList.innerHTML = '<li>No players online</li>';
        }
    } catch (error) {
        console.error('Error fetching server status:', error);
        document.getElementById('players-online').textContent = 'Error';
        document.getElementById('player-list').innerHTML = '<li>Error fetching player list</li>';
    }
}

// Call the function to fetch server status
fetchServerStatus();

// Fetch Minecraft server status
async function getServerStatus() {
    const response = await fetch('https://api.mcsrvstat.us/2/185.172.57.189:25566');
    const data = await response.json();

    const playerCountElement = document.getElementById('player-count');

    if (data.online) {
        playerCountElement.textContent = data.players.online + ' / ' + data.players.max;
    } else {
        playerCountElement.textContent = 'Server is offline';
    }
}

getServerStatus();


// JavaScript for toggling light and dark mode
const toggleButton = document.getElementById("icon");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    // Toggle moon and sun icon for visual feedback (optional)
    if (body.classList.contains("light-mode")) {
        toggleButton.src = "sun.png"; // Switch to sun icon
    } else {
        toggleButton.src = "moon.png"; // Switch back to moon icon
    }
});



