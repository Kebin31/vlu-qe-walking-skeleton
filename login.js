// auth.js
function login(username, password) {
    return username === 'admin' && password === '123';
}

// Export module để có thể test bằng Jest trong môi trường Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = login;
}
