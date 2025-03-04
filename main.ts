input.onButtonPressed(Button.A, function () {
    狀態 = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    servos.P2.run(100)
    basic.pause(2000)
    servos.P2.run(10)
    basic.pause(2000)
    servos.P2.run(0)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showIcon(IconNames.Happy)
    狀態 = 1
})
let 狀態 = 0
basic.showIcon(IconNames.Happy)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
servos.P2.run(0)
loops.everyInterval(1000, function () {
    if (狀態 == 0) {
        basic.clearScreen()
        servos.P2.run(0)
    }
    if (狀態 == 1) {
        if (input.soundLevel() > 30) {
            servos.P2.run(100)
        }
        if (input.soundLevel() <= 30) {
            servos.P2.run(10)
        }
    }
})
