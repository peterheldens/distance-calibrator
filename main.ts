input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 5; index++) {
        radio.sendValue("distance", distance)
        basic.pause(200)
    }
    distance += 1
    basic.showIcon(IconNames.Yes)
    basic.showNumber(distance)
})
input.onButtonPressed(Button.AB, function () {
    distance = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(distance)
})
radio.onReceivedValue(function (name, value) {
    serial.writeNumbers([value, radio.receivedPacket(RadioPacketProperty.SignalStrength)])
    serial.writeLine("")
    basic.showNumber(value)
})
let distance = 0
distance = -1
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showNumber(distance)
