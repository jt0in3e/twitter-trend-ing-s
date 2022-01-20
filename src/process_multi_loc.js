const getTrends = require("./get_trends.js");

const getPromiseWrapper = (location) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      getTrends(location).then( (trendsObj) => {
        resolve(trendsObj)
      });
    }, 5000);
  });
}

let trendsOfMultiLoc = [];
const getNextTrend = (d, locations) => {
  getPromiseWrapper(locations[d])
    .then(trendsObj => {
      trendsOfMultiLoc.push(trendsObj);
      d++;
      if (d < locations.length) {
        getNextTrend(d, locations);
      } else {
        Promise.resolve(trendsOfMultiLoc);
      }
    })
    .catch(e => console.log(`Error: ${e}`));
}

module.exports = getNextTrend;
