const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const sanitizeHTML = require('sanitize-html');
const template = require('../lib/template.js');

router.get('/login', (request, response) => {
    var title = 'Login';
    var list = template.list(request.filelist);
    var HTML = template.HTML(title, list,
        `<form action="/auth/login" method="post">
            <p><input type="text" name="email" placeholder="Email" /></p>
            <p><input type="password" name="password" placeholder="Password" /></p>
            <p><input type="submit" value="Login" /></p>
        </form>`,
        `<h2>${title}</h2>`
    );
    response.send(HTML);
});

module.exports = router;