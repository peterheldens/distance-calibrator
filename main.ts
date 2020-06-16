input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 49; index++) {
        radio.sendValue("distance", distance)
        led.toggle(0, 0)
        basic.pause(10)
    }
    distance += 1
    basic.showNumber(distance)
})
input.onButtonPressed(Button.B, function () {
    distance = 0
})
radio.onReceivedValue(function (name, value) {
    led.toggle(0, 0)
    if (distance == value) {
        counter += 1
        sum += radio.receivedPacket(RadioPacketProperty.SignalStrength)
        average = sum / counter
        if (counter == 45) {
            serial.writeNumbers([value, Math.round(average)])
            basic.showNumber(value)
        }
    } else {
        basic.clearScreen()
        distance += 1
        average = 0
        counter = 0
        sum = 0
    }
})
let sum = 0
let distance = 0
let counter = 0
let average = 0
average = 0
counter = 0
distance = 0
sum = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showNumber(0)
