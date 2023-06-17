function generateRandomName() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz';
    let name = '';

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomCharacter = characters.charAt(randomIndex);
        name += randomCharacter;
    }

    return name;
}

module.exports = {
    generateRandomName
};
