const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    crypto.pbkdf2('비밀번호', salt, 656463, 64, 'sha512', (err, key) => {
        console.log('password: ', key.toString('base64'));
    });
});
