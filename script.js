document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    // Handle form submission (Enter key or Send button)
    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();  // Prevent page refresh
        const message = userInput.value.trim();

        if (message) {
            displayMessage(message, 'user');
            userInput.value = '';  // Clear input field

            // Send message to server and await response
            try {
                const response = await fetch('http://localhost:3000/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message })
                });
                const data = await response.json();
                displayMessage(data.reply, 'bot');
            } catch (error) {
                console.error("Error:", error);
            }
        }
    });

    // Function to display messages in chat
    function displayMessage(text, sender) {
        const messageBubble = document.createElement('div');
        messageBubble.classList.add('message-bubble', sender);
        messageBubble.textContent = text;
        chatBox.appendChild(messageBubble);
        chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to the bottom
    }
});
















  











