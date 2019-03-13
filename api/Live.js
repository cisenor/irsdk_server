export class Live {
  constructor(sdk){
    this._sdk = sdk
  }

  GET(request, response, params){
    if (!this.valid(request)){
      response.status(404).end();
      return;
    }
    response.json(this._sdk['values'][request.params["field"]]);
  }

  valid(request){
    return request.query["f"] == "json";
  }
}
export default Live
