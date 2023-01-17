const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();

const fileStoreOptions = {};

app.use(session({
    secret: 'Secret!',
    resave: false,
    saveUninitialized: true,
    store: new FileStore(fileStoreOptions),
}));

app.get('/', (req, res, next) => {
    if(req.session.num === undefined){
        req.session.num = 1;
    } else {
        req.session.num += 1;
    };
    res.send(`num:${req.session.num}`)
});

app.listen(3000, () => {
    console.log('3000!')
});