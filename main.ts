radio.onReceivedValue(function (name, value) {
    if (name == "drive") {
        kitronik_servo_lite.forward()
    } else if (name == "stop") {
        kitronik_servo_lite.stop()
    } else if (name == "turnSpeed") {
        turnSpeed = value
    } else if (name == "forwardSpeed") {
        forwardSpeed = value
    } else if (name == "reverse") {
        kitronik_servo_lite.backward()
    } else if (name == "turnRight") {
        kitronik_servo_lite.right()
    } else if (name == "turnLeft") {
        kitronik_servo_lite.left()
    }
})
let forwardSpeed = 0
let turnSpeed = 0
basic.showLeds(`
    . # . # .
    # . . . #
    . . # . .
    # . . . #
    . # . # .
    `)
radio.setGroup(99)
turnSpeed = 10
forwardSpeed = 10
kitronik_servo_lite.setDistancePerSecond(forwardSpeed)
kitronik_servo_lite.setDegreesPerSecond(turnSpeed)
basic.forever(function () {
	
})
