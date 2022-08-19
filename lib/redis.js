const Redis = require('redis');
const { REDIS_HOST, REDIS_PORT } = process.env

const connectRedis = () => {
  const obj = {
    host: REDIS_HOST,
    port: REDIS_PORT,
  };
  return new Promise((resolve, reject) => {
    const client = Redis.createClient(obj);
    client.on('connect', () => {
      console.log('Redis connected');
    });
    client.on('err', (err) => {
      console.log('error', err);
      reject(err);
    });
  });
};

module.exports = connectRedis();
