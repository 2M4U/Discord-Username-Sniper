const { delay } = require('./utils');
async function handleRateLimit(response) {
    const retryAfter = response.headers.get('retry-After') || 1;
    console.log(`Ratelimited...\nRetrying after ${retryAfter} second(s)`)
    await delay(retryAfter * 1000);
}
module.exports = { handleRateLimit }