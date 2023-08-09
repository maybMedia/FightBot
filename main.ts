let pin0Dir = 30
let pin1Dir = 90
let pin2Dir = 90
let pin3Dir = 60
Servo.Servo(4, pin0Dir)
Servo.Servo(5, pin1Dir)
Servo.Servo(2, pin2Dir)
Servo.Servo(6, pin3Dir)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showArrow(ArrowNames.West)
        pin0Dir += 30
        Servo.Servo(4, pin0Dir)
        pin1Dir += 50
        Servo.Servo(5, pin1Dir)
        basic.pause(75)
        pin1Dir += -50
        Servo.Servo(5, pin1Dir)
        pin0Dir += -30
        Servo.Servo(4, pin0Dir)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showArrow(ArrowNames.East)
        pin0Dir += -30
        Servo.Servo(4, pin0Dir)
        pin1Dir += 50
        Servo.Servo(5, pin1Dir)
        basic.pause(75)
        pin1Dir += -50
        Servo.Servo(5, pin1Dir)
        pin0Dir += 30
        Servo.Servo(4, pin0Dir)
    } else {
        basic.clearScreen()
    }
})
