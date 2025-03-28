const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('home', {
    title: 'VideoFolio - Portfolio Builder for Video Editors'
  });
});

module.exports = router;
