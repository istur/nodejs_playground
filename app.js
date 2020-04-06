const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const server = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

server.set('view engine', 'pug');
server.set('views', 'views');

server.use(bodyParser.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname, 'public')));

server.use('/admin', adminRoutes.routes);
server.use(shopRoutes);

server.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: '404 Page Not Found'});
})

server.listen(3000);