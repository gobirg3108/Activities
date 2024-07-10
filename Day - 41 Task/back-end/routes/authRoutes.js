const express = require('express');
const { register, forgotPassword, resetPassword } = require('../controllers/authControllers');

const router = express.Router();

router.post('/register', register);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resetToken', resetPassword);

module.exports = router;
