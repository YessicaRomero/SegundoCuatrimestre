var Televisor = /** @class */ (function () {
    function Televisor(on, vol, chn) {
        if (on === void 0) { on = false; }
        if (vol === void 0) { vol = 0; }
        if (chn === void 0) { chn = 0; }
        this.isOn = on;
        this.volume = vol;
        this.channel = chn;
    }
    Televisor.prototype.switchOnOff = function () {
        this.isOn = !this.isOn;
        console.log(this.isOn ? "encendido" : "apagado");
    };
    Televisor.prototype.volUp = function (volume) {
        if (this.isOn && volume < 100)
            this.volume = volume + 1;
        console.log("vol up", this.volume);
    };
    Televisor.prototype.volDown = function (volume) {
        if (this.isOn && volume > 0)
            this.volume = volume - 1;
        console.log("vol Down", this.volume);
    };
    Televisor.prototype.channelUp = function (channel) {
        if (this.isOn && channel < 99)
            this.channel = channel + 1;
        console.log("channel Up", this.channel);
    };
    Televisor.prototype.channelDown = function (channel) {
        if (this.isOn && channel > 1)
            this.channel = channel - 1;
        console.log("channel down", this.channel);
    };
    Televisor.prototype.pickChannel = function (channel) {
        if (!this.isOn)
            return;
        this.channel = channel;
        console.log("Cambiaste al canal", this.channel);
    };
    Televisor.prototype.info = function (channel, volume) {
        if (!this.isOn)
            return;
        this.channel = channel;
        this.volume = volume;
        var today = new Date();
        // obtener la hora en la configuración regional de EE. UU.
        var now = today.toLocaleTimeString('en-Ar');
        console.log("canal:", this.channel, "volumen:", this.volume, "hora actual", now);
    };
    return Televisor;
}());
var tv01 = new Televisor();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.pickChannel(45);
tv01.volUp(10);
tv01.volDown(67);
tv01.channelUp(18);
tv01.channelDown(9);
tv01.info(5, 78);
