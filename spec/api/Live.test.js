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

let subject = new Live(testData);

describe("GET",()=>{
  test("Returns json", ()=>{
    subject.GET(req, res, null)
    expect(res.json).toHaveBeenCalledWith("Racing")
    
  });
  describe("parameters do not ask for json", ()=>{
    test("will redirect to 404", ()=>{
      params["f"] = 'html';
      subject.GET(req, res)
      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});
