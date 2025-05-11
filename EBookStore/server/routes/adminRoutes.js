const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { auth } = require('../middlewares/auth');

// Public routes
router.get('/users', auth, adminController.getAllUsers);
router.get('/users/:id', auth, adminController.getUserById);

module.exports = router;