const axios = require('axios');
const { handleRateLimit } = require('./errorHandling');

const API_BASE_URL = 'https://discord.com/api/v9';

async function updateUsername(token, password, newUsername, webhookUrl) {
  const url = `${API_BASE_URL}/users/@me`;

  const payload = {
    'username': newUsername,
    'password': password
  };

  try {
    const response = await axios.patch(url, payload, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      await sendWebhookNotification(webhookUrl, 'Success', newUsername);
      return Promise.resolve();
    } else if (response.status === 429) {
      await handleRateLimit(response);
      return updateUsername(token, password, newUsername, webhookUrl);
    } else {
      await sendWebhookNotification(webhookUrl, 'Failure', newUsername);
      return Promise.reject(new Error(`Failed to change username. Status code: ${response.status}`));
    }
  } catch (error) {
    await sendWebhookNotification(webhookUrl, 'Failure', newUsername);
    return Promise.reject(new Error('An error occurred while updating username:', error.message));
  }
}

async function sendWebhookNotification(webhookUrl, status, username) {
  const message = status === 'Success' ? `Username change successful: ${username}` : `Username change failed: ${username}`;

  const payload = {
    content: message
  };

  try {
    await axios.post(webhookUrl, payload);
    console.log('Webhook notification sent successfully.');
  } catch (error) {
    console.error('Failed to send webhook notification:', error.message);
  }
}

module.exports = {
  updateUsername
};
