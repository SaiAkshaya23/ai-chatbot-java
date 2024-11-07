const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve the static files (HTML, CSS, JS) for the frontend
app.use(express.static('public'));

// Chatbot logic
app.post('/chat', (req, res) => {
    const userMessage = req.body.message.toLowerCase();  // Convert the user input to lowercase
    let botResponse;

    // Add more responses based on user input
    if (userMessage === "hello") {
        botResponse = "Hi there! How can I assist you today?";
    } else if (userMessage === "how are you?") {
        botResponse = "I'm doing great! How about you?";
    } else if (userMessage === "what is your name?") {
        botResponse = "I am SmartSolve, your friendly chatbot!";
    } else if (userMessage === "tell me a joke") {
        botResponse = "Why don’t skeletons fight each other? They don’t have the guts!";
    } else if (userMessage === "what can you do?") {
        botResponse = "I can chat with you, tell jokes, and answer questions. What would you like to know?";
    } else if (userMessage === "goodbye") {
        botResponse = "Goodbye! Have a great day!";
    } else if (userMessage.includes("your favorite")) {
        botResponse = "I love chatting with you! That's my favorite thing to do!";
    } else if (userMessage.includes("help")) {
        botResponse = "I'm here to help! What do you need assistance with?";
    } else {
        botResponse = `You said: ${req.body.message}. Let me know if you need anything else!`;
    }

    // Send the bot's response back as JSON
    res.json({ reply: botResponse });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});































