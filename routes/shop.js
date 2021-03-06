const path = require('path');
const express = require('express');
const router = express.Router();
const rootPath = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    // res.sendFile(path.join(rootPath, 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/' });
});

module.exports = router;