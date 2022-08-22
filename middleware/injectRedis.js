const redis = require("../lib/redis");

const injectRedis = () => async (req, res, next) => {
  req.redis = await redis;
  next();
};

module.exports = injectRedis;
