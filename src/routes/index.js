const express = require('express');
const router = express.Router();

// home page
router.get('/', (req, res) => {
    res.render('index.html')
});

// about page
router.get('/about', (req, res) => {
    res.render('about.html')
});


// export
module.exports = router;