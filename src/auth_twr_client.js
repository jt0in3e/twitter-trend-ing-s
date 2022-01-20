const Twitter = require('twitter-lite');

const consumer_key = process.env.API_KEY;
const consumer_secret = process.env.API_SECRET;
const access_token_key = process.env.ACCESS_TOKEN;
const access_token_secret = process.env.ACCESS_SECRET;

const client = new Twitter({
  consumer_key: consumer_key, 
  consumer_secret: consumer_secret, 
  access_token_key: access_token_key, 
  access_token_secret: access_token_secret
});

module.exports = client;
