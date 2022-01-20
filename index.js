const fs = require("fs");
const getTrends = require("./src/get_trends.js");
const saveTrends = require("./src/save_trends.js");
const trendsFile = "./data/trends.json";
const locationsToCheck = JSON.parse(fs.readFileSync("./data/locations_to_check.json"));
//const processMultLoc = require("./src/process_multi_loc.js"); 
const UKRAINE_WOEID = process.env.UKRAINE_WOEID;

getTrends(UKRAINE_WOEID)
  .then(trendsObj => { 
    console.log(`trends received: ${trendsObj.trends.length} \non: ${new Date().toJSON()}`);
    return saveTrends(trendsObj, trendsFile); 
  })
  .then( () => console.log(`Trends for WOEID:${UKRAINE_WOEID} saved to file ${trendsFile}`) )
  .catch(e => console.log(`Error: \n ${JSON.stringify(e, null,2)}`))
