const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.render("index");
});
router.get('/about',(req, res) => {
    res.render("./layouts/about");
});

router.get('/contact',(req, res) => {
    res.render("./layouts/contactus");
});


module.exports = router;