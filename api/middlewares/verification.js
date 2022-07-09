const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    const authHeader = req.get('token');
    if(authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) res.status(403).json("Token is invalid");
            else {
                req.user = user;
                next();
            }
        })
    } else {
        res.status(401).json("you are not authenticated");
    }
}

module.exports = verify;