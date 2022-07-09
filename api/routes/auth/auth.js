const router = require('express').Router();
const cryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { encrypt, decrypt } = require('../../helpers/auth');

//Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: encrypt(req.body.password)
    });
    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });

        if (!user) {
            res.status(401).json("wrong email");
        } else {
            const originalPassword = decrypt(user.password)
            if (originalPassword !== req.body.password) {
                res.status(401).json("wrong password");
            } else {
                const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY, { expiresIn: "5d" });
                const { password, ...response } = user._doc;
                res.status(201).json({ ...response, accessToken });
            }

        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;