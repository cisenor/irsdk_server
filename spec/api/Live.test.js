import Live from "api/Live.js";
import * as testData from "spec/fixtures/telemetry.json"
let params = {
  f: "json",
  field: "SessionState"
}
let req = {
  params,
  query: params,
  body: {}
}

let res = {
  json: jest.fn(),
  status: jest.fn(()=>{return {end: jest.fn()}}),
  send: jest.fn()
}

const mockResponse = {
  rpm: 1400,
  carLeftRight: []
}
const mockIr = {
  all: jest.fn(()=>mockResponse),
  on: jest.fn()
}

let subject = new Live(mockIr, testData);

describe("GET",()=>{
  test("Returns json", ()=>{
    subject.GET(req, res, null)
    expect(res.json).toHaveBeenCalledWith(mockResponse)
    
  });
  describe("parameters do not ask for json", ()=>{
    test("will redirect to 404", ()=>{
      params["f"] = 'html';
      subject.GET(req, res)
      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});
