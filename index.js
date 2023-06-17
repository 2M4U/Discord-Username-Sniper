const { generateRandomName } = require('./utils/nameGenerator');
const { updateUsername } = require('./utils/apiService');
const config = require('./config.json');

// Destructure values from the config object
const { webhookUrl, token, password } = config;

// Generate a random 3-letter name
const randomName = generateRandomName();

// Update the Discord username
updateUsername(token, password, randomName, webhookUrl)
    .then(() => {
        console.log(`Username successfully changed to ${randomName}.`);
    })
    .catch(error => {
        console.error('An unexpected error occurred:', error.message);
    });
