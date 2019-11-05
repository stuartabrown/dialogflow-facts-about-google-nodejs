"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const functions = require("firebase-functions");
const axios = require("axios");

// clients
const dialogFlowApp = require("./DialogflowApp");
const expressApp = express().use(bodyParser.json());
// const app = express();
const port = 3000;

// EXPRESS APP fulfillment route (POST). The entire dialogFlowApp object (incl its handlers) is the callback handler for this route.
expressApp.post("/", dialogFlowApp);


//  EXPRESS APP test route (GET)
expressApp.get("/", async (req, res) => {
  // const data = await getStravaData();zxc
  // console.log(data.athlete.id);
  // res.send("CONFIRMED RECEIPT OF GET REQUEST. " + data.athlete.id);
  res.send("CONFIRMED RECEIPT OF GET REQUEST. ");
});

console.log("hello", process.env.NODE_ENV);

expressApp.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}!`));

//EXPORT two endpoints:  one express app, one dialogflow app
exports.fulfillmentExpressServer = functions.https.onRequest(expressApp);
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(dialogFlowApp);

