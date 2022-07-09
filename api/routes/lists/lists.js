const axios = require('axios').default;
const router = require('express').Router();

/**
 * Movie Types:
 *      top_rated,
 *      upcoming,
 *      now_playing,
 *      popular
 */

router.get("/:list_type", async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${req.params.list_type}`, {
            headers: {"Authorization": `Bearer ${process.env.TMDB_TOKEN}`}
        });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;