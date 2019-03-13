import express from "express";
const server = express();
import Live from "./api/live";
import moment from "moment";
import * as testData from "./spec/fixtures/telemetry.json"
import IrSDK from "./models/IrSDK";
const PORT = 3000;

const live = new Live(testData);

server.listen(PORT, ()=>{
  const stamp = moment().format();
  console.log(`${stamp} | Listening on port ${PORT}`);
});

server.get('/live/:field', (req, res, next) => {
  live.GET(req, res, next);
});
