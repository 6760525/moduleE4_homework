// Задание E4.4.

function Device (power, plugged) {
    this.power = power;
    this.plugged = false;
}

Device.prototype.plugIn = function () {
    this.plugged = true;
}
Device.prototype.plugOut = function () {
    this.plugged = false;
}
Device.prototype.getPower = function () {
    console.log(`Мощность: ${this.power}`);
}
Device.prototype.setPower = function (power) {
    this.power = power
}

function Iron (power, plugged, model) {
    Device.call(this, power, plugged)
    this.model = model;
 }
Iron.prototype = new Device()

function Computer (power, plugged, type) {
    Device.call(this, power, plugged)
    this.type = type
}
Computer.prototype = new Device()

function TV (power, plugged, size) {
    Device.call(this, power, plugged)
    this.size = size
}
TV.prototype = new Device()

const iron = new Iron(1000, false, 'Rowenta DG8624U1')
const cPort = new Computer(500, false, 'laptop')
const cDesk = new Computer(800, false, 'desktop')
const tv21 = new TV(200, 'Samsung 21 in', 21)
const tv75 = new TV(400, 'Sony 75 in', 75)

const devices = [iron, cPort, cDesk, tv21, tv75]

iron.plugIn()
iron.setPower(1500)
cDesk.plugIn()
tv75.plugIn()

let consumption = 0
for (const d of devices) {
  console.log(d)
  if (d.plugged) {
    consumption += d.power
  }
}
console.log(`Total power consumption is ${consumption}`)
