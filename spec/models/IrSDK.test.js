import IrSDK from "models/IrSDK";
import * as testData from "spec/fixtures/telemetry.json"
let subject = new IrSDK({on: jest.fn() }, testData.values);
describe("Telemetry", ()=>{
  describe("Given valid telemetry",()=>{
    test("will return valid data", ()=>{
      expect(subject.all()).toEqual({ carLeftRight: [ "LROff" ], rpm: 300 });
    });
  });
});
