const client = require("./auth_twr_client.js");

const getTrends = (woeid) => {
  const parameters = {
    id: woeid
  };
  return client.get("trends/place", parameters)
           .then(result => {
             return result.length ? { 
               "trends": result[0].trends, 
               "location": result[0].locations[0],
               "as_of": result[0]["as_of"],
               "created_at": result[0]["created_at"]
             } : new Error(`No data received`);
           })
           .catch(e => e)
}

module.exports = getTrends;
