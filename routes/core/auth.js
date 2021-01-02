const express = require('express');
const router = express.Router();
const user = require('../../models/user');

// authenticate
router.post('/', async(req, res) => {
    try {
        const userData = await user.findOne({ 'phone': req.body.phone, password: req.body.password });
        if (userData) {
            return res.send({ status: true, message: 'login success' });
        } else {
            return res.status(400).send({ status: false, message: 'invalid login' });
        }

    } catch (error) {
        return res.send(error);
    }
});

module.exports = router