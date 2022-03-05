"use strict";

const path = require("path");

const dotenv = require("dotenv");
dotenv.config();
if (process.env.NODE_ENV === "test") {
  dotenv.config({
    path: path.join(__dirname, ".env.test"),
    override: true,
  });
}

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const runner = require("./test-runner");
const { apiRoutes, fccTestingRoutes } = require("./routes");
const { errorHandler, loggerDev, notFoundHandler } = require("./middlewares");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" })); //For FCC testing purposes only
app.use(loggerDev);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static(process.cwd() + "/public"));

// Index page (static HTML)
app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

//For FCC testing purposes
fccTestingRoutes(app);

// API routes
apiRoutes(app);

// Error Handler Middleware
app.use(errorHandler);

//404 Not Found Middleware
app.use(notFoundHandler);

const PORT = process.env.PORT || 3000;
// Start our server and tests!
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  if (process.env.NODE_ENV === "test") {
    console.log("Running Tests...");
    setTimeout(function () {
      try {
        runner.run();
      } catch (error) {
        console.log("Tests are not valid:");
        console.error(error);
      }
    }, 1500);
  }
});

module.exports = app; // For testing
