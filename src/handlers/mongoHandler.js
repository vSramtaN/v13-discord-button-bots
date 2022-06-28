const mongoose = require("mongoose");
const github = require('../config/sramtan.json')

mongoose.connect(github.Bot.Database_Mongourl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => console.log("[DATABASE] Connected To Database"));
mongoose.connection.on("error", () => console.error("[DATABASE] Failed To Connect Database"));

