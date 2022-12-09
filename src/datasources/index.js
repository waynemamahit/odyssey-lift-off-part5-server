const TrackAPI = require("./track-api");

const dataSources = () => ({
  trackAPI: new TrackAPI()
})

module.exports = dataSources