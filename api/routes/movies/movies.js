const router = require('express').Router();
const { Movie } = require('../../models');
const verify = require("../../middlewares/verification");

// example https://api.themoviedb.org/3/movie/550?api_key=a839969a4ef59fcfb21637308c762a2e

// GET RANDOM
router.get("/random", verify, async (req, res) => {
    const type = req.query?.type ?? "movie";
    try {
        const response = await Movie.aggregate([
            {$match: {isSeries: type === "series"}},
            {$sample: {size: 1}}
        ]);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET
router.get("/:id", verify, async (req, res) => {
    if(req.user.isAdmin) {
        try {
            const movie = Movie.findById(req.params.id);
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(300).json("You are not allowed");
    }
});

// DELETE
router.delete("/:id", verify, async (req, res) => {
    if(req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("done");
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(300).json("You are not allowed");
    }
});

// UPDATE
router.put("/:id", verify, async (req, res) => {
    if(req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            res.status(200).json(updatedMovie);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(300).json("You are not allowed");
    }
});

// CREATE
router.post("/", verify, async (req, res) => {
    if(req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        try {
            const savedMovie = await newMovie.save();
            res.status(200).json(savedMovie);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(300).json("You are not allowed");
    }
});

module.exports = router;