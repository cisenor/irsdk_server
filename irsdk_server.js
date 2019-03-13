import express from "express";
const server = express();
import Live from "./api/live";
import moment from "moment";
import * as testData from "./spec/fixtures/telemetry.json"
import IrSDK from "./models/IrSDK";
import iracing from "node-irsdk";
const PORT = 3000;
const irParams = {telemetryUpdateInterval: 1000/30};
iracing.init(irParams);
const ir = iracing.getInstance();
const irsdk = new IrSDK(ir);
const live = new Live(irsdk);
server.listen(PORT, ()=>{
  
const stamp = moment().format();
  console.log(`${stamp} | Listening on port ${PORT}`);
});

server.get('/live/:field', (req, res, next) => {
  live.GET(req, res, next);
});
