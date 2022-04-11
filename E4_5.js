// Задание E4.5.

class Device {
    constructor (power, plugged){
        this.power = power;
        this.plugged = false;
    }

    plugIn () {
        this.plugged = true;
    }

    plugOut () {
        this.plugged = false;
    }

    getPower () {
        console.log(`Мощность: ${this.power}`);
    }

    setPower (power) {
        this.power = power
    }
}


class Iron extends Device {
    constructor (power, plugged, model) {
        super(power, plugged)
        this.model = model;
    }
}

class Computer extends Device {
    constructor (power, plugged, type) {
        super(power, plugged)
        this.type = type;
    }
}

class TV extends Device {
    constructor (power, plugged, size) {
        super(power, plugged)
        this.size = size;
    }
}

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
