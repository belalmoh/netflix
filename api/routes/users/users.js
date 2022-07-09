const router = require('express').Router();
const { encrypt } = require('../../helpers/auth');
const { User } = require('../../models');
const verify = require("../../middlewares/verification");

/**
 * Delete
 * Get/id
 * Get all
 * Get user stats
 */

// get
router.get("/find/:id", async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        const { password, ...response } = foundUser._doc;
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get all users
router.get("/", verify, async (req, res) => {
    const query = req.query?.new;
    if (req.user.isAdmin) {
        try {
            const foundUsers = query ? await User.find().limit(10) : await User.find();
            res.status(200).json(foundUsers);
        } catch (error) {
            res.status(500).json(error);
        }
    }
});

router.get("/stats", async (req, res) => {
    const today = new Date();
    const lastYear = today.getFullYear() - 1;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    try {
        const data = await User.aggregate([
            { $project: { month: { $month: "$createdAt" } } },
            { $group: { _id: "$month", total: { $sum: 1 } } }
        ]);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});

// update
router.put("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = encrypt(req.body.password);
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('you can only update your account');
    }
});

// delete
router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("success");
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('you can only delete your account');
    }
});

module.exports = router;