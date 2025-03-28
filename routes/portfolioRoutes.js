const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// View public portfolio
router.get('/:id', portfolioController.viewPortfolio);

module.exports = router;
