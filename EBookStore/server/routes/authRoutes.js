const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { auth } = require('../middlewares/auth');

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected routes
router.get('/profile', auth, authController.getProfile);
// Update profile (PATCH là chuẩn, nếu muốn POST thì đổi thành router.post)
router.post('/profile', auth, authController.updateProfile);
//change password
router.post('/change-password', auth, authController.changePassword);

module.exports = router;