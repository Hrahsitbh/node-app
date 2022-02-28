const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    // verifying the jwt token generated is valid or not from our side
    const decoded = jwt.verify(token, "nodecourse");
    console.log(token);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) throw new Error();
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    console.log(e)
    res.status(401).send({ error: "Please Authenticate" });
  }
};

module.exports = auth;
