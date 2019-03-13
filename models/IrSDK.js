export class IrSDK {
  constructor(iracing, telemetry=null){
    this.iracing = iracing;
    this.telemetry = telemetry;
    if (this.iracing){
      this.iracing.on("Telemetry", (evt)=>{ this.onTelemetryUpdated(evt) });
      this.iracing.on("Connected", ()=> { this.onConnected() });
      this.iracing.on("Disconnected", ()=> { this.onDisconnected() });
      this.iracing.on("SessionInfo", (evt)=>{ this.onSessionUpdated() });
    }
  }
  onConnected(evt) {
    console.log("Connected to sim.");
    this.connected = true;
  }

  onDisconnected(evt) {
    console.log("Sim disconnected. Looking for sim...");
    this.connected = false;
  }

  onSessionUpdated(evt) {
    this.session = evt;
  }

  onTelemetryUpdated(evt) {  
    this.telemetry = evt.values;
  }

  carLeftRight() {
    if (!this.telemetry) {
      return -1;
    }
    return this.telemetry.CarLeftRight;
  }

  rpm() { 
    if (!this.telemetry) {
      return 0;
    }
    return this.telemetry.RPM;
  }

  all(){
    return {
      carLeftRight: this.carLeftRight(),
      rpm: this.rpm()
    }
  }
}

export default IrSDK;
