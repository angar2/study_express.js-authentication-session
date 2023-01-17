const express = require('express');
const router = express.Router();
const template = require('../lib/template.js');

function authIsOwner(request, response) {
    if(request.session.is_login) {
        return true;
    } else {
        return false;
    }
};

function authStatus(request, response) {
    var authStatus = `<a href="/auth/login">Login</a>`
    if(authIsOwner(request, response)) {
        authStatus = `${request.session.nickname} | <a href="/auth/logout">Logout</a>`;
    }
    return authStatus;
};


router.get('/', (request, response) => {
    var title = 'Welcome';
    var description = 'Hello Express';
    var list = template.list(request.filelist);
    var HTML = template.HTML(title, list, 
        `<h2>${title}</h2>
        <p>${description}</p>
        <img src="/images/hello.jpg" style="width:200px">`, 
        `<a href="/create">Create</a>`,
        authStatus(request, response)
    );
    response.send(HTML);
});

module.exports = router;