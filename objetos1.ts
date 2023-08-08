class Televisor {
    isOn: boolean;
    volume: number;
    channel: number;
    constructor(on: boolean = false, vol: number = 0, chn: number = 0) {
      this.isOn = on;
      this.volume = vol;
      this.channel = chn;
    }
    switchOnOff(): void {
      this.isOn = !this.isOn;
      console.log(this.isOn ? "encendido" : "apagado");
    }
    volUp(volume:number): void {
        if(this.isOn && volume<100)
         this.volume = volume+1;
       console.log("vol up", this.volume) 
         
       
    }
    volDown(volume:number): void {
      if(this.isOn && volume>0)
         
        
      this.volume = volume-1;
   console.log("vol Down", this.volume) 
      
    }
    channelUp(channel:number): void {
      if( this.isOn && channel<99)

      this.channel = channel+1;
  

      console.log("channel Up", this.channel);
     
    }
    channelDown(channel:number): void {
      if(this.isOn && channel>1)

      this.channel = channel-1;
  

      console.log("channel down", this.channel);
    }
    pickChannel(channel: number): void {
      if (!this.isOn) return;
      this.channel = channel;
      console.log("Cambiaste al canal", this.channel);
    }
    info(channel:number,volume:number): void {
      if (!this.isOn) return;
      this.channel = channel;
      this.volume = volume;
      var today = new Date();

var now = today.toLocaleTimeString('en-Ar');

     
      console.log("canal:",  this.channel ,  "volumen:" , this.volume, "hora actual", now);
    }
  }
  
  const tv01 = new Televisor();
  tv01.switchOnOff();
  tv01.switchOnOff();
  tv01.switchOnOff();
  tv01.pickChannel(45);
  tv01.volUp(10);
  tv01.volDown(67);
  tv01.channelUp(18);
  tv01.channelDown(9);
  tv01.info(5,78);