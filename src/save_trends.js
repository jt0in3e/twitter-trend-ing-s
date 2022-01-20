/**
 * How to
 * this should work to open existing file and write (push) new trends
 * processing them on a fly
 * @saveTrends => receives trendsObj consisting of trends array and location
 */
const fs = require("fs");
const nowDate = new Date().toJSON();

const saveTrends = (trendsObj,fileToRead) => {
  return fs.readFile(fileToRead, "utf8", ( err, trends ) => {
    if (err) throw err;
    trends = JSON.parse(trends);
    const location = trendsObj.location;
    const created_at = trendsObj["created_at"];
    const as_of = trendsObj["as_of"];
    let trendsReceived = trendsObj.trends;
    trendsReceived.forEach( trend => {
      return trends.push(Object.assign(trend, {"dateTime": nowDate, "location": location, "created_at": created_at, "as_of": as_of}));
    });
    return fs.writeFile( fileToRead, JSON.stringify(trends, null, 2), "utf8", ( (e) => {
      if (e) throw e;
    }));
  });
};

module.exports = saveTrends;
