# Discord Username Sniper

The Discord Username Sniper is a script that demonstrates how to generate a random 3-letter name and update a Discord username using the Discord API. It provides the ability to send webhook notifications upon successful or failed username snipes. The project is organized into multiple files for better modularity and maintainability.

## File Structure

- **index.js:** The entry point of the application. It generates a random name and updates the Discord username.
- **utils/nameGenerator.js:** Contains the `generateRandomName()` function that generates a random 3-letter name.
- **utils/apiService.js:** Provides the `updateUsername()` function to handle updating the Discord username using the Discord API. It also includes webhook notifications upon success or failure.
- **utils/errorHandling.js:** Contains utility functions for error handling and rate limiting.
- **utils/utils.js:** Contains utility functions used across the project.
- **config.json:** Stores the webhook URL, Discord token, and password.

## Usage

1. Create a `config.json` file in the project root directory with the following structure:
   ```json
   {
     "webhookUrl": "https://your-webhook-url",
     "token": "Your_Token",
     "password": "Your_Password"
   }

2. Replace the values `"https://your-webhook-url"`, `"Your_Token"`, and `"Your_Password"` with your actual webhook URL, Discord token, and password, respectively.

3. Run the script using Node.js: `node index.js`.

The script will read the configuration from `config.json`, generate a random 3-letter name, update the Discord username, and log the result. If webhook notifications are enabled, it will send notifications upon success or failure.

## Dependencies

- axios: Used for making HTTP requests to the Discord API.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/discord-username-sniper.git`.
2. Install the dependencies: `npm install axios`.
3. Replace `'Your_Token'` and `'Your_Password'` in `index.js` with your appropriate Discord token and password.
4. Run the script: `node index.js`.

## Disclaimer

This code is provided for educational purposes only. The developer holds no responsibility for any illegal or unethical use and/or termination of your account using this code. Use this code responsibly, adhere to Discord's terms of service and guidelines, and respect rate limits.

---

