const password = {
    value: '',
    length: 8,
    characters: {
        numbers: '0123456789',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        special: '?/~^{}[]!@#$%&*()_-+=.,:;',
    },

    generate(chars) {
        let pwd = '';
        this.length = this.length < 5 || this.length > 50 ? 15 : this.length;
        chars = chars || Object.values(this.characters).join('');
        for (let i = 0; i < this.length; i++) {
            pwd += chars[Math.floor(Math.random() * chars.length)];
        }

        this.value = pwd;
        return pwd;
    }
};

// Adiciona evento ao botão
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate');
    const passwordInput = document.getElementById('password');

    generateButton.addEventListener('click', () => {
        const newPassword = password.generate();
        passwordInput.value = newPassword;
    });
});
