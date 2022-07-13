const jwt = require("jsonwebtoken");

const authenticateJWT = () => async (req, res, next) => {
  try {
    const authToken = req.header("Authorization").replace("Bearer ", "");
    const verifiedToken = jwt.verify(authToken, process.env.JWT_SECRET);
    console.log('verifiedToken:', verifiedToken)
    req.user = verifiedToken
    next();
  } catch (err) {
    console.log(err)
    return res.json({ msg: "JWT expired" });
  }
};

module.exports = authenticateJWT

//"Bearer a;lksdoipque;laskdpqoiew;alsdkqpoeir.al;skd;laskd.al;sdka;sdlkj"
