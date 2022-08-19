radio.onReceivedValue(function (name, value) {
    if (name == "drive") {
        kitronik_servo_lite.forward()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(showTime)
    } else if (name == "stop") {
        kitronik_servo_lite.stop()
    } else if (name == "tSpeed") {
        turnSpeed = value
        basic.showNumber(value)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
    } else if (name == "fSpeed") {
        forwardSpeed = value
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        basic.showNumber(value)
    } else if (name == "reverse") {
        kitronik_servo_lite.backward()
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.pause(showTime)
    } else if (name == "turnR") {
        kitronik_servo_lite.right()
        basic.showLeds(`
            # # # # .
            # . . # .
            # . # # #
            # . . # .
            # . . . .
            `)
        basic.pause(showTime)
    } else if (name == "turnL") {
        kitronik_servo_lite.left()
        basic.showLeds(`
            . # # # #
            . # . . #
            # # # . #
            . # . . #
            . . . . #
            `)
        basic.pause(showTime)
    }
    basic.showLeds(`
        . # . # .
        # . . . #
        . . # . .
        # . . . #
        . # . # .
        `)
})
let showTime = 0
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
showTime = 500
kitronik_servo_lite.setDistancePerSecond(forwardSpeed)
kitronik_servo_lite.setDegreesPerSecond(turnSpeed)
basic.forever(function () {
	
})
