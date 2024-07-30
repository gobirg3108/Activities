const express = require('express');
const router = express.Router();
const {
  register,
  activateAccount,
  login,
  forgotPassword,
  resetPassword
} = require('../controllers/authController');

router.post('/register', register);
router.get('/activate/:token', activateAccount);
router.post('/login', login);
router.post('/forgotpassword', forgotPassword);
router.post('/resetpassword/:token', resetPassword);

module.exports = router;
